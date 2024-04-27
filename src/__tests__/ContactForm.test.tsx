import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

// Mocking the emailjs library
jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn(() => Promise.resolve())
}));

describe('ContactForm component', () => {
  it('renders without crashing', () => {
    render(<ContactForm onClose={() => {}} isFormSubmitted={false} setisFormSubmitted={() => {}} />);
  });

  it('displays correct information and handles form submission', async () => {
    const onCloseMock = jest.fn();
    const setisFormSubmittedMock = jest.fn();

    render(
      <ContactForm onClose={onCloseMock} isFormSubmitted={false} setisFormSubmitted={setisFormSubmittedMock} />
    );

    // Check form fields
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();

    // Fill form fields
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });

    // Submit the form
    fireEvent.submit(screen.getByText('Submit'));

    // Wait for form submission
    await waitFor(() => {
      expect(screen.getByText('SUCCESS!')).toBeInTheDocument();
    });

    // Check if form submission callback functions are called
    expect(setisFormSubmittedMock).toHaveBeenCalledWith(true);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
