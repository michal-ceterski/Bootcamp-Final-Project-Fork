import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../auth/UserContext';
import roomdata from './RoomData';
import { Room } from './RoomData';

const BookingForm = () => {
  const [date, setDate] = useState<string>('');
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const {ID} = useContext(UserContext);
  console.log("text", ID);

// Fetch room data from RoomData.js
  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    setRooms(roomdata);
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleRoomSelect = (roomId: number) => {
    console.log(roomId);
    setSelectedRoom(roomId);
  };

  const handleBookingSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedRoom !== null && date.trim() !== '') {
      // Should send request for room booking to the server
      // Resets the form
      setDate('');
      setSelectedRoom(null);
    } else {
      alert('Please select a room and date');
    }
  };

  return (
    <div>
      <h2>Book a Room</h2>
      <form onSubmit={handleBookingSubmit}>
        <label htmlFor="date">Choose Booking Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="room">Choose Room:</label>
        <select
          id="room"
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