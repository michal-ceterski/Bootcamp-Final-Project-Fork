import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Register } from './Register';

describe('Register', () => {
  const onCloseMock = jest.fn();
  const onLoginClickMock = jest.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
    onLoginClickMock.mockClear();
  });

  it('renders without crashing', () => {
    render(<Register onClose={onCloseMock} onLoginClick={onLoginClickMock} />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<Register onClose={onCloseMock} onLoginClick={onLoginClickMock} />);
    fireEvent.click(screen.getByTestId('close-btn'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls handleSubmit when register form is submitted', () => {
    render(<Register onClose={onCloseMock} onLoginClick={onLoginClickMock} />);
    const name = 'Test User';
    const login = 'test@test.com';
    const password = 'password';
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: name } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: login } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: password } });
    fireEvent.submit(screen.getByTestId('register-form'));
    // Assertions for registration process should be added here, like mocking the createUserWithEmailAndPassword function
  });

  it('calls onLoginClick when "Sign in" button is clicked', () => {
    render(<Register onClose={onCloseMock} onLoginClick={onLoginClickMock} />);
    fireEvent.click(screen.getByText('Sign in'));
    expect(onLoginClickMock).toHaveBeenCalledTimes(1);
  });
});