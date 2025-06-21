// Nav.jsx
import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = ({ query, handleInputChange }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // Hide on scroll down
      } else {
        setShow(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`nav ${show ? "show" : "hide"}`}>
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
        <h1 className="title font-matangi">Sliders</h1>
      </div>
    </nav>
  );
};

export default Nav;
