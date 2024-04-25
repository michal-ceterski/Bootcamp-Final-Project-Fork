import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { UserContext } from '../auth/UserContext';
import roomdata from './RoomData';
import { Room } from './RoomData';
import { auth } from "../api/firebase";
import emailjs from '@emailjs/browser';

type ContactFormProps = {
  isFormSubmitted: boolean,
  setisFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

const BookingForm = ({setisFormSubmitted, isFormSubmitted}:ContactFormProps) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const { ID } = useContext(UserContext);

// Fetch room data from RoomData.ts
  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    setRooms(roomdata);
    console.log(ID);
    console.log(auth)
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

  const handleBookingSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedRoom !== null && startDate.trim() !== '' && endDate.trim() !== '') {
      // Should send request for room booking to the server
      //Sends email with booking confirmation to the user
      emailjs
      .sendForm('service_i9svdvj', 'template_ihq485e', form.current, {
        publicKey: 'nEnmgTagRKnAS2Ayl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setisFormSubmitted(true);
          
          },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
      // Resets the form
      setStartDate('');
      setEndDate('');
      setSelectedRoom(null);
    } else {
      alert('Please select a room, start date, and end date');
    }
  };

  return (
    <div>
      <h2>Book a Room</h2>
      <form ref={form} onSubmit={handleBookingSubmit}>
        <input type='hidden' name='user_email' value={auth?.currentUser?.email}/>
        <label htmlFor="start-date">Choose Start Date:</label>
        <input
          type="date"
          id="start-date"
          name="start-date"
          value={startDate}
          onChange={handleStartDateChange}
          required
        />
        <label htmlFor="end-date">Choose End Date:</label>
        <input
          type="date"
          id="end-date"
          name="end-date"
          value={endDate}
          onChange={handleEndDateChange}
          required
        />
        <label htmlFor="room">Choose Room:</label>
        <select
          id="room"
          name="room"
          value={selectedRoom || ''}
          onChange={(event) => handleRoomSelect(Number(event.target.value))}
          required
        >
          <option value="" disabled>Choose Room</option>
          {rooms.map(room => (
            <option key={room.id} value={room.id}>{room.roomname} - ${room.price}</option>
          ))}
        </select>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;