import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2>Linki</h2>
          <ul>
            <li><a href="/">Strona główna</a></li>
            <li><a href="/about">O nas</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Media</h2>
          <ul>
            <li><a href="https://tripadvisor.com/">TripAdvisor</a></li>
            <li><a href="https://facebook.com/">Facebook</a></li>
            <li><a href="https://instagram.com/">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Kontakt</h2>
          <p>Adres: Al. Nieznana 5, 01-100 Tajna Góra, Nibylandia</p>
          <p>Tel: +425 89 123 45 67</p>
          <p>E-mail: info@superhotel.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Super Hotel. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}

export default Footer;



// PRZYKŁADOWE CSS (do przeróbki i wklejenia do App.css?)

// footer {
//     background-color: #333;
//     color: #fff;
//     padding: 20px 0;
//   }
  
//   .footer-content {
//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;
//   }
  
//   .footer-section {
//     flex: 1;
//     margin: 0 20px;
//   }
  
//   .footer-section h2 {
//     margin-bottom: 10px;
//   }
  
//   .footer-section ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   .footer-section ul li {
//     margin-bottom: 5px;
//   }
  
//   .footer-section ul li a {
//     color: #fff;
//     text-decoration: none;
//   }
  
//   .footer-bottom {
//     text-align: center;
//     margin-top: 20px;
//   }

// DO PRZERÓBKI I WKLEJENIA DO APP.JSX

// import React from 'react';
// import Footer from './Footer';

// const App = () => {
//   return (
//     <div className="App">
//       {/* Other components */}
//       <Footer />
//     </div>
//   );
// }

// export default App;