import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Form } from './Form';

describe('Form component', () => {
  const handleSubmitMock = jest.fn();

  beforeEach(() => {
    handleSubmitMock.mockClear();
  });

  it('renders without crashing', () => {
    render(<Form submitText="Submit" handleSubmit={handleSubmitMock} />);
  });

  it('submits form data correctly', async () => {
    render(<Form submitText="Submit" handleSubmit={handleSubmitMock} />);

    // Fill form fields
    fireEvent.change(screen.getByLabelText('Login'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.submit(screen.getByText('Submit'));

    // Wait for form submission
    await waitFor(() => {
      expect(handleSubmitMock).toHaveBeenCalledWith({
        login: 'test@example.com',
        password: 'password123'
      });
    });
  });

  it('hides password field when specified', () => {
    render(<Form submitText="Submit" isPasswordHidden={true} handleSubmit={handleSubmitMock} />);

    // Ensure password field is hidden
    expect(screen.queryByLabelText('Password')).not.toBeInTheDocument();
  });

  it('displays password field when not specified', () => {
    render(<Form submitText="Submit" handleSubmit={handleSubmitMock} />);

    // Ensure password field is displayed
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
});