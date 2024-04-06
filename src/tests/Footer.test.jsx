import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders footer with correct content', () => {
    // Rendering of footer component
    const { getByText, getByTestId } = render(<Footer />);

    // Asserts if footer contenct displays properly
    expect(getByText('Linki')).toBeInTheDocument();
    expect(getByText('Media')).toBeInTheDocument();
    expect(getByText('Kontakt')).toBeInTheDocument();
    expect(getByText('Strona główna')).toBeInTheDocument();
    expect(getByText('O nas')).toBeInTheDocument();
    expect(getByText('Kontakt')).toBeInTheDocument();
    expect(getByTestId('tripadvisor-link')).toHaveAttribute('href', 'https://tripadvisor.com/');
    expect(getByTestId('facebook-link')).toHaveAttribute('href', 'https://facebook.com/');
    expect(getByTestId('instagram-link')).toHaveAttribute('href', 'https://instagram.com/');
    expect(getByText('Adres: Al. Nieznana 5, 01-100 Tajna Góra, Nibylandia')).toBeInTheDocument();
    expect(getByText('Tel: +425 89 123 45 67')).toBeInTheDocument();
    expect(getByText('E-mail: info@superhotel.com')).toBeInTheDocument();
    expect(getByText('© 2024 Super Hotel. Wszystkie prawa zastrzeżone.')).toBeInTheDocument();
  });
});