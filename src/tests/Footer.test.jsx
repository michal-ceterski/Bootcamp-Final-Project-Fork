import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders footer with correct content', () => {
    // Rendering of footer component
    const { getByText, getByTestId } = render(<Footer />);

    // Asserts if footer contenct displays properly
    expect(getByText('Links')).toBeInTheDocument();
    expect(getByText('Social Media')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Main page')).toBeInTheDocument();
    expect(getByText('About us')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByTestId('tripadvisor-link')).toHaveAttribute('href', 'https://tripadvisor.com/');
    expect(getByTestId('facebook-link')).toHaveAttribute('href', 'https://facebook.com/');
    expect(getByTestId('instagram-link')).toHaveAttribute('href', 'https://instagram.com/');
    expect(getByText('Adress: Al. Nieznana 5, 01-100 Tajna Góra, Nibylandia')).toBeInTheDocument();
    expect(getByText('Tel: +425 89 123 45 67')).toBeInTheDocument();
    expect(getByText('E-mail: info@superhotel.com')).toBeInTheDocument();
    expect(getByText('© 2024 Sol Hotel. All rights reserved.')).toBeInTheDocument();
  });
});