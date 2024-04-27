import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  it('renders without crashing', () => {
    render(<AboutUs />);
  });

  it('displays correct information', () => {
    const { getByText, getByAltText, getByRole, getByTestId } = render(<AboutUs />);

    // Assertions for headings and paragraphs
    expect(getByText('A Brand Leader')).toBeInTheDocument();
    expect(getByText(/Offering the most powerful portfolio/)).toBeInTheDocument();
    expect(getByText('Core Values & Heritage')).toBeInTheDocument();
    expect(getByText(/Founded by J. Willard and Alice Marriott/)).toBeInTheDocument();
    expect(getByText('Company Strategy')).toBeInTheDocument();
    expect(getByText(/Our Growing Forward strategy/)).toBeInTheDocument();
    expect(getByText('Diversity & Inclusion')).toBeInTheDocument();
    expect(getByText(/Diversity and inclusion is fundamental/)).toBeInTheDocument();
    expect(getByText('Sustainability & Social Impact')).toBeInTheDocument();
    expect(getByText(/Guided by our sustainability and social impact platform/)).toBeInTheDocument();

    // Assertions for links
    expect(getByRole('link', { name: '+48 58 999 99 99' })).toHaveAttribute('href', 'tel:+48589999999');
    expect(getByRole('link', { name: /recepcja@solhotel.com/ })).toHaveAttribute('href', 'mailto:recepcja@solhotel.com');
    expect(getByRole('link', { name: '+48 58 888 88 88' })).toHaveAttribute('href', 'tel:+48588888888');
    expect(getByRole('link', { name: /booking@solhotel.com/ })).toHaveAttribute('href', 'mailto:booking@solhotel.com');

    // Assertions for images
    expect(getByAltText('Core Values & Heritage')).toHaveAttribute(
      'src',
      'https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_core-values-heritage/unlimited/photo/assets-usage-rights/pdt-hot-shoppe-1927-744354017118562-wide-hor.jpg'
    );
    expect(getByAltText('Company Strategy')).toHaveAttribute(
      'src',
      'https://cache.marriott.com/content/dam/marriott-digital/digitallegal-micorp-cec/en_us/micorp_about-marriott/unlimited/photo/assets/pdt-corp-strategy-796777262148152.jpg'
    );
    expect(getByAltText('Diversity & Inclusion')).toHaveAttribute(
      'src',
      'https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_about-marriott/unlimited/photo/assets-usage-rights/pdt-diversity-and-inclusion-593095843034458-wide-hor.jpg'
    );
    expect(getByAltText('Sustainability & Social Impact')).toHaveAttribute(
      'src',
      'https://cache.marriott.com/content/dam/marriott-renditions/dm-static-renditions/digitallegal-micorp-cec/en_us/micorp_sustainability-social-impact/unlimited/photo/assets-usage-rights/pdt-sustain---tree-planting-484752399741473-wide-hor.jpg'
    );

    // Assertions for containers
    expect(getByTestId('info-container')).toBeInTheDocument();
    expect(getByTestId('box-container')).toBeInTheDocument();
  });
});