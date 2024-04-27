import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RoomDescription } from './RoomDescription';
import { UserContext } from '../auth/UserContext';
import { AuthProvider } from '../auth/AuthContext';

describe('RoomDescription component', () => {
  it('renders without crashing', () => {
    render(
      <AuthProvider>
        <RoomDescription />
      </AuthProvider>
    );
  });

  it('displays room information correctly', () => {
    render(
      <AuthProvider>
        <RoomDescription />
      </AuthProvider>
    );
    expect(screen.getByText('SEE OUR COMFORTABLE ROOM')).toBeInTheDocument();
    expect(screen.getByText(/The hotel has 85 rooms/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('room-image')).toHaveLength(3); // Assuming there are three rooms in the roomdata
  });

  it('displays room amenities correctly', () => {
    render(
      <AuthProvider>
        <RoomDescription />
      </AuthProvider>
    );
    expect(screen.getByAltText('internet-icon')).toBeInTheDocument();
    expect(screen.getByText('Free room Wi-Fi internet')).toBeInTheDocument();
    expect(screen.getByAltText('fridge-icon')).toBeInTheDocument();
    expect(screen.getByText('Refridgerator')).toBeInTheDocument();
    // Add assertions for other amenities
  });

  it('calls handleBooking when "Book Now" button is clicked', () => {
    const handleBookingMock = jest.fn();
    render(
      <AuthProvider>
        <RoomDescription />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText('Book Now'));
    expect(handleBookingMock).toHaveBeenCalledTimes(1);
  });
});