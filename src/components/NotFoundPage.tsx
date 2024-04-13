import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = () => {
      // Implement search functionality
      console.log("Search term:", searchTerm);
      // Redirect or display search results accordingly
    };
  
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <img src="https://media.tenor.com/eD6ODXgpFdsAAAAi/wat.gif" alt="404 GIF" />
        <p>Confused? We are too.</p>
        <p>You can go back to the <Link to="/">homepage</Link> to get back on track.</p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  
  export default NotFoundPage;