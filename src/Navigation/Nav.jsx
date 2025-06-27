import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = ({ query, handleInputChange }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      // Ignore small scrolls (under 10px)
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        ticking = false;
        return;
      }

      if (currentScrollY > lastScrollY) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
