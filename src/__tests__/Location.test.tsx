import React from 'react';
import { render, screen } from '@testing-library/react';
import { Location } from './Location';

describe('Location component', () => {
  it('renders without crashing', () => {
    render(<Location />);
  });

  it('displays hotel information correctly', () => {
    render(<Location />);
    expect(screen.getByText('Hotel Sol')).toBeInTheDocument();
    expect(screen.getByText('The building, whose architecture refers to the style of a seaside villa, is located on the main communication route of the Tri-City, and at the same time right next to the Aquapark and only 250 m from the sandy beach. The hotel has 50 rooms. On its premises there is the Aquarella Restaurant, serving European cuisine and 3 conference rooms.')).toBeInTheDocument();
  });

  it('displays Leaflet map correctly', () => {
    render(<Location />);
    const leafletMap = screen.getByTestId('leaflet-map');
    expect(leafletMap).toBeInTheDocument();
    expect(leafletMap).toHaveStyle('height: 500px');
    expect(leafletMap).toHaveStyle('width: 1000px');
  });

  it('displays marker with correct information', () => {
    render(<Location />);
    const markerPopup = screen.getByText('Hotel Sol');
    expect(markerPopup).toBeInTheDocument();
    expect(markerPopup).toHaveTextContent('Al. Nieznana 5');
    expect(markerPopup).toHaveTextContent('01-100 Tajna Góra');
    expect(markerPopup).toHaveTextContent('Nibylandia');
  });
});