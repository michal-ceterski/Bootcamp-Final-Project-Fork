import { useState, useEffect } from 'react';

interface HotelRoom {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface BookingFormProps {
  userId: number; // Zakładamy, że mamy ID usera zalogowanego
}

const BookingForm = ({ userId }: BookingFormProps) => {
  const [date, setDate] = useState<string>('');
  const [rooms, setRooms] = useState<HotelRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  useEffect(() => {
    // Fetchuje dane o pokojach hotelowych z API
    // !!!Funkcja placebo - podmienić pod właściwy API call!!!
    const fetchHotelRooms = async () => {
      try {
        const response = await fetch('api/hotel-rooms');
        if (!response.ok) {
          throw new Error('Failed to fetch hotel rooms');
        }
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching hotel rooms:', error);
      }
    };

    fetchHotelRooms();
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleRoomSelect = (roomId: number) => {
    setSelectedRoom(roomId);
  };

  const handleBookingSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedRoom !== null && date.trim() !== '') {
      // Wysyła do serwera prośbę o zabukowanie pokoju
      console.log(`Booking room ${selectedRoom} for date ${date} by user ${userId}`);
      // Reset formularza
      setDate('');
      setSelectedRoom(null);
    } else {
      alert('Please select a room and date');
    }
  };

  return (
    <div>
      <h2>Zarezerwuj pokój</h2>
      <form onSubmit={handleBookingSubmit}>
        <label htmlFor="date">Wybierz datę rezerwacji:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="room">Wybierz pokój:</label>
        <select
          id="room"
          value={selectedRoom || ''}
          onChange={(event) => handleRoomSelect(Number(event.target.value))}
          required
        >
          <option value="" disabled>Wybierz pokój</option>
          {rooms.map(room => (
            <option key={room.id} value={room.id}>{room.name} - ${room.price}</option>
          ))}
        </select>
        <button type="submit">Zarezerwuj</button>
      </form>
    </div>
  );
};

export default BookingForm;