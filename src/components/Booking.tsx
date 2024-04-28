import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { UserContext } from '../auth/UserContext';
import { auth } from "../api/firebase";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next"
import { useContact } from './ContactContext';
import { db } from '../api/firebase';
import { setDoc, doc, getDoc, onSnapshot} from 'firebase/firestore';
import { v4 as uuidv4 } from "uuid";
import './Booking.css';

type ContactFormProps = {
  isFormSubmitted: boolean,
  setisFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  error: boolean,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
}

const BookingForm = ({setisFormSubmitted, isFormSubmitted, error, setError}:ContactFormProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const { ID } = useContext(UserContext);
  const {t} =useTranslation()
  const userdataRef = doc(db, "users", ID)
  const [userbookings, setUserbookings] = useState([]);
console.log(userbookings)
// Fetch room data from RoomData.ts
  const {roomdata} =useContact();
  useEffect(() => {
    const fetchuserbookings = async () => {
      const doc = await onSnapshot(userdataRef, (doc) => {
        if(doc.exists()) {
          const {bookings} = doc.data()
          setUserbookings(bookings)
        }
      })
    }
    fetchuserbookings()
  }, []);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleRoomSelect = (roomId: number) => {
    console.log(roomId);
    setSelectedRoom(roomId);
  };

  const form = useRef<HTMLFormElement>(null);

const handleDelete = async (resID) => {
  await setDoc(userdataRef,{bookings: userbookings.filter(obj => obj.resID !== resID)})
}

  const handleBookingSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedRoom !== null && startDate.trim() !== '' && endDate.trim() !== '') {
      const bookingdata = {
        resID: uuidv4(),
        startDate: startDate,
        endDate: endDate,
        roomID: selectedRoom
      }
            // Should send request for room booking to the server
      await setDoc(userdataRef, {bookings: [...userbookings, bookingdata]})
      .then(()=>{
            setisFormSubmitted(true);
      //Sends email with booking confirmation to the user
            emailjs
            .sendForm('service_i9svdvj', 'template_ihq485e', form.current, {
              publicKey: 'nEnmgTagRKnAS2Ayl',
            })
            .then(
              () => {
                console.log('SUCCESS! Email sent');
                
                
                },
              (error) => {
                console.log('FAILED to send email', error.text);
              },
            )

      })
      .catch(()=>{ setError(true)})



       // Resets the form
      setStartDate('');
      setEndDate('');
      setSelectedRoom(null);
    } else {
      alert('Please select a room, start date, and end date');
    }
  };

  return (
    <div className='all'>
    <div>
      <h2>{t('booking_form')}</h2>
      <div id='booking-form'  >
      <form  ref={form} onSubmit={handleBookingSubmit}>
        <input type='hidden' name='user_email' value={auth?.currentUser?.email}/>
        <label htmlFor="start-date">{t('booking_start_date')}</label>
        <input
          type="date"
          id="start-date"
          name="start-date"
          value={startDate}
          onChange={handleStartDateChange}
          required
        />
        <label htmlFor="end-date">{t('booking_end_date')}</label>
        <input
          type="date"
          id="end-date"
          name="end-date"
          value={endDate}
          onChange={handleEndDateChange}
          required
        />
        <label htmlFor="room">{t('booking_room')}</label>
        <select
          id="room"
          name="room"
          value={selectedRoom || ''}
          onChange={(event) => handleRoomSelect(Number(event.target.value))}
          required
        >
          <option value="" disabled>{t('booking_room')}</option>
          {roomdata.map(room => (
            <option key={room.id} value={room.id}>{localStorage.i18nextLng === 'PL'? room.roomnamePL: room.roomname} - ${room.price}</option>
          ))}
        </select>
        <button id="click" type="submit">{t('booking_submit')}</button>
      </form>
      </div>

      <div className='booking-list'>
      <div className='booking-list-title'>{t('bookingBookings')}</div>
    {userbookings?.map((booking) => {
        return (
          <React.Fragment key={booking.resID}>
            <div>{t('bookingStartdate')} {booking.startDate}</div>
            <div>{t('bookingEnddate')} {booking.endDate}</div>
            <div>{t('bookingRoom')} {booking.roomID}</div>
            <button id="click" onClick={() => handleDelete(booking.resID)}>{t('bookingDeletereservation')}</button>
          </React.Fragment>
        )
    })}
    </div>
    </div>
    </div>
  );
};

export default BookingForm;