import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Home } from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

// Mocking firebase/auth module
jest.mock('firebase/auth', () => ({
  signOut: jest.fn(() => Promise.resolve()),
  auth: {
    currentUser: {
      email: 'test@example.com'
    }
  }
}));

describe('Home component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  it('displays greeting message with email when user is logged in', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByText('Hello test@example.com')).toBeInTheDocument();
  });

  it('displays generic greeting message when user is not logged in', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('displays Gallery component', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByTestId('gallery')).toBeInTheDocument();
  });

  it('displays Location component', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByTestId('location')).toBeInTheDocument();
  });

  it('displays Discount component', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByTestId('discount')).toBeInTheDocument();
  });
});