import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Discount from './Discount';

// Mocking the Firebase Firestore functions
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn(() => Promise.resolve())
}));

describe('Discount component', () => {
  it('renders without crashing', () => {
    render(<Discount />);
  });

  it('displays correct information and handles form submission', async () => {
    render(<Discount />);

    // Check form fields
    expect(screen.getByText('RECEIVE AN EXTRA 10% DISCOUNT')).toBeInTheDocument();
    expect(screen.getByLabelText('Enter your Email')).toBeInTheDocument();
    expect(screen.getByText(/I hereby agree to receive commercial information/)).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();

    // Fill form fields
    fireEvent.change(screen.getByLabelText('Enter your Email'), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByLabelText('I hereby agree to receive commercial information'));

    // Submit the form
    fireEvent.submit(screen.getByText('Submit'));

    // Wait for form submission
    await waitFor(() => {
      expect(screen.getByText('SUCCESS!')).toBeInTheDocument();
    });

    // Check if Firestore functions are called
    expect(collection).toHaveBeenCalledWith(expect.any(Object), 'users');
    expect(addDoc).toHaveBeenCalledWith(expect.any(Object), {
      email: 'test@example.com'
    });
  });
});
