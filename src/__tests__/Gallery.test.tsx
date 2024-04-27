import React from 'react';
import { render } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery component', () => {
  it('renders without crashing', () => {
    render(<Gallery />);
  });

  it('displays correct number of images', () => {
    const { getAllByRole } = render(<Gallery />);
    const galleryImages = getAllByRole('img');
    expect(galleryImages).toHaveLength(3);
  });

  it('displays images with correct attributes', () => {
    const { getAllByRole } = render(<Gallery />);
    const galleryImages = getAllByRole('img');
    const expectedImages = [
      {
        src: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/ef/d0.jpg',
        alt: 'First placeholder image in gallery'
      },
      {
        src: 'https://static.prsa.pl/images/56f92698-7b84-416d-ae66-344c25d948d2.jpg?format=500',
        alt: 'Second placeholder image in gallery'
      },
      {
        src: 'https://naukawpolsce.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/202310/46711862_46709856.jpg?itok=oqfQC8-R',
        alt: 'Third placeholder image gallery'
      }
    ];

    galleryImages.forEach((image, index) => {
      expect(image).toHaveAttribute('src', expectedImages[index].src);
      expect(image).toHaveAttribute('alt', expectedImages[index].alt);
    });
  });

  it('displays images in an ImageGallery component', () => {
    const { getByTestId } = render(<Gallery />);
    const imageGallery = getByTestId('image-gallery');
    expect(imageGallery).toBeInTheDocument();
  });
});