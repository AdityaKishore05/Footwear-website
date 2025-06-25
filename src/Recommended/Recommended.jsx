import React, { useEffect, useState } from 'react'
import "./Recommended.css"
import Button from "../components/Button"

const Recommended = ({ handleClick }) => {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return (
    <div className={`recommended-flex ${scrollDir === "down" ? "stick-to-top" : "original-position"}`}>
      <Button onClickHandler={handleClick} value="" title="All Products" />
      <Button onClickHandler={handleClick} value="Dreampairs" title="Dreampairs" />
      <Button onClickHandler={handleClick} value="Puma" title="Puma" />
      <Button onClickHandler={handleClick} value="Nike" title="Nike" />
      <Button onClickHandler={handleClick} value="Vans" title="Vans" />
    </div>
  );
};

export default Recommended;
