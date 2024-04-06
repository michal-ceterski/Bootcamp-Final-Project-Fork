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
          <h2>Contact</h2>
          <p>Adress: Al. Nieznana 5, 01-100 Tajna Góra, Nibylandia</p>
          <p>Tel: +425 89 123 45 67</p>
          <p>E-mail: info@solhotel.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sol Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
