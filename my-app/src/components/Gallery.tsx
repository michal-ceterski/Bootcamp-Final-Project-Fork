// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import firebaseConfig from './src/api/firebase.config.js';  

import './Gallery.css';



export const Gallery = () => {
  

  return (
    <div className="gallery">
      <div className="image-list">
        
            <img src='https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/ef/d0.jpg' alt='sukiennice' />
            <img src='https://static.prsa.pl/images/56f92698-7b84-416d-ae66-344c25d948d2.jpg?format=500' alt='wawel' />
            <img src='https://naukawpolsce.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/202310/46711862_46709856.jpg?itok=oqfQC8-R' alt='kopiec' />

          </div>
    </div>    
  );
};

export default Gallery;