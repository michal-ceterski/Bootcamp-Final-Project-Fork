import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Login } from './Login';

describe('Login', () => {
  const onCloseMock = jest.fn();
  const onRegisterClickMock = jest.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
    onRegisterClickMock.mockClear();
  });

  it('renders without crashing', () => {
    render(<Login onClose={onCloseMock} onRegisterClick={onRegisterClickMock} />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<Login onClose={onCloseMock} onRegisterClick={onRegisterClickMock} />);
    fireEvent.click(screen.getByTestId('close-btn'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls handleSubmit when login form is submitted', () => {
    render(<Login onClose={onCloseMock} onRegisterClick={onRegisterClickMock} />);
    const login = 'test@test.com';
    const password = 'password';
    fireEvent.change(screen.getByPlaceholderText('Login'), { target: { value: login } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: password } });
    fireEvent.submit(screen.getByTestId('login-form'));
    // Assertions for login process should be added here, like mocking the signInWithEmailAndPassword function
  });

  it('calls onRegisterClick when "Sign up" button is clicked', () => {
    render(<Login onClose={onCloseMock} onRegisterClick={onRegisterClickMock} />);
    fireEvent.click(screen.getByText('Sign up'));
    expect(onRegisterClickMock).toHaveBeenCalledTimes(1);
  });
});