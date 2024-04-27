import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {t} =useTranslation()
  
    const handleSearch = () => {
      // Implement search functionality
      console.log("Search term:", searchTerm);
      // Redirect or display search results accordingly
    };

  
    return (
      <div>
        <h1>{t('PageNotFound')}</h1>
        <img src="https://media.tenor.com/eD6ODXgpFdsAAAAi/wat.gif" alt="404-GIF" />
        <p>{t('confused')}</p>
        <p>{t('LinkToHomePage1')} <Link to="/">{t('homepage')}</Link> {t('LinkToHomePage2')}</p>
      </div>
    );
  };
  
  export default NotFoundPage;