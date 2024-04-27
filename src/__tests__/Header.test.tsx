import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Header } from './Header';
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

describe('Header component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <Header loginPopupVisible={false} setLoginPopupVisible={() => {}} />
      </Router>
    );
  });

  it('displays navigation buttons correctly', () => {
    render(
      <Router>
        <Header loginPopupVisible={false} setLoginPopupVisible={() => {}} />
      </Router>
    );

    expect(screen.getByText('Sol Hotel')).toBeInTheDocument();
    expect(screen.getByText('Book Now')).toBeInTheDocument();
    expect(screen.getByText('Our Rooms')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });

  it('displays login button when user is not logged in', () => {
    jest.spyOn(window.location, 'replace').mockImplementation(() => {});

    render(
      <Router>
        <Header loginPopupVisible={false} setLoginPopupVisible={() => {}} />
      </Router>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('opens login popup when login button is clicked', () => {
    const setLoginPopupVisibleMock = jest.fn();

    render(
      <Router>
        <Header loginPopupVisible={false} setLoginPopupVisible={setLoginPopupVisibleMock} />
      </Router>
    );

    fireEvent.click(screen.getByText('Login'));
    expect(setLoginPopupVisibleMock).toHaveBeenCalled();
  });

  it('logs out when log out button is clicked', async () => {
    render(
      <Router>
        <Header loginPopupVisible={false} setLoginPopupVisible={() => {}} />
      </Router>
    );

    fireEvent.click(screen.getByText('Log Out'));
    await waitFor(() => expect(window.location.replace).toHaveBeenCalled());
  });
});