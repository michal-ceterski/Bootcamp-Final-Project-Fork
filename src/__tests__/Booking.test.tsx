import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import BookingForm from './Booking';

// Mocking the UserContext
const mockUserContext = {
  ID: 'mockedUserID'
};
jest.mock('../auth/UserContext', () => ({
  UserContext: {
    useContext: jest.fn(() => mockUserContext)
  }
}));

// Mocking the emailjs library
jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn(() => Promise.resolve())
}));

describe('BookingForm component', () => {
  it('renders without crashing', () => {
    render(<BookingForm />);
  });

  it('displays correct information and handles form submission', async () => {
    render(<BookingForm />);
    
    // Check form fields
    expect(screen.getByText('Book a Room')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Start Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose End Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Room:')).toBeInTheDocument();
    expect(screen.getByText('Book')).toBeInTheDocument();

    // Fill form fields
    fireEvent.change(screen.getByLabelText('Choose Start Date:'), { target: { value: '2024-05-01' } });
    fireEvent.change(screen.getByLabelText('Choose End Date:'), { target: { value: '2024-05-03' } });
    fireEvent.change(screen.getByLabelText('Choose Room:'), { target: { value: '1' } });

    // Submit the form
    fireEvent.submit(screen.getByRole('button', { name: 'Book' }));

    // Wait for form submission
    await waitFor(() => {
      expect(screen.getByText('SUCCESS!')).toBeInTheDocument();
    });
  });

  it('alerts when form fields are not filled', () => {
    render(<BookingForm />);
    
    // Submit the form without filling fields
    fireEvent.submit(screen.getByRole('button', { name: 'Book' }));

    // Check alert message
    expect(window.alert).toHaveBeenCalledWith('Please select a room, start date, and end date');
  });
});
