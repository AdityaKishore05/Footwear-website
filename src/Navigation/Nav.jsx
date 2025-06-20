// Nav.jsx
import "./nav.css";
import React from 'react';


const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for Shoes"
          className="search-input"
        />
      </div>
      <div>
        <h1 className=" title font-matangi">Sliders</h1>
      </div>
    </nav>
  );
};

export default Nav;
