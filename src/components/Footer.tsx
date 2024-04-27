import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next"
import { useContact } from './ContactContext';

const Footer = () => {
  const {t} =useTranslation()
  const { openContactPopup } = useContact();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2>{t('Links')}</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About us</a></li>
            <li><a href="#" onClick={openContactPopup}>Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>{t('SocialMedia')}</h2>
          <ul>
            <li><a href="https://tripadvisor.com/" target='_blank'>TripAdvisor</a></li>
            <li><a href="https://facebook.com/" target='_blank'>Facebook</a></li>
            <li><a href="https://instagram.com/" target='_blank'>Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>{t('Contact')}</h2>
          <p>Adress: Al. Nieznana 5, 01-100 Tajna Góra, Nibylandia</p>
          <p><a className='contact-link' href="tel:+425891234567">+425 89 123 45 67</a></p>
          <p><a className='contact-link' href="mailto:info@solhotel.com" target='_blank'>info@solhotel.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {t('AllRightsReserved')}</p>
      </div>
    </footer>
  );
}

export default Footer;
