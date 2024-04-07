import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li><a href="/">Main page</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Social Media</h2>
          <ul>
            <li><a href="https://tripadvisor.com/" target='_blank'>TripAdvisor</a></li>
            <li><a href="https://facebook.com/" target='_blank'>Facebook</a></li>
            <li><a href="https://instagram.com/" target='_blank'>Instagram</a></li>
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
