// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import firebaseConfig from './src/api/firebase.config.js';  

import './Gallery.css';
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/ef/d0.jpg',
    originalHeight: 300,
    originalWidth : 300,
    loading: "lazy" as const,
    originalAlt: "First placeholder image in gallery"
  },
  {
    original: 'https://static.prsa.pl/images/56f92698-7b84-416d-ae66-344c25d948d2.jpg?format=500',
    originalHeight: 300,
    originalWidth : 300,
    loading: "lazy" as const,
    originalAlt: "Second placeholder image in gallery"
  },
  {
    original: 'https://naukawpolsce.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/202310/46711862_46709856.jpg?itok=oqfQC8-R',
    originalHeight: 300,
    originalWidth : 300,
    loading: "lazy" as const,
    originalAlt: "Third placeholder image gallery"
  },
];

const Gallery = () => {

  return (
    <>
    
    <div className="image-gallery-wrapper">
        <ImageGallery
          items={images}
          autoPlay={true}
          showThumbnails={false} />
      </div>
      </>   
  );
};

export default Gallery;