import React, { useState, useEffect } from 'react';
import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import data from "./db/Data";
import Card from "./components/Card.jsx";
import './App.css'; // layout styles


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "category") {
      setSelectedCategory(value);
    } else if (name === "price") {
      setSelectedPrice(value);
    }
  };
  

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(data, category, price, query) {
    let filtered = data;
  
    if (query) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    // Price filtering
    if (price !== "") {
      filtered = filtered.filter(({ newPrice }) => {
        const priceValue = parseFloat(newPrice.toString().replace('$', ''));
        const selectedValue = parseFloat(price);
  
        switch (selectedValue) {
          case 50:
            return priceValue >= 0 && priceValue <= 50;
          case 100:
            return priceValue > 50 && priceValue <= 100;
          case 150:
            return priceValue > 100 && priceValue <= 150;
          case 200:
            return priceValue > 150;
          default:
            return true;
        }
      });
    }
  
    // Category filtering
    if (category !== "") {
      filtered = filtered.filter(({ category: cat, color, company, title }) =>
        cat === category ||
        color === category ||
        company === category ||
        title === category
      );
    }
  
    return filtered.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={title}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }
  

  const result = filteredData(data, selectedCategory, selectedPrice, query);
  
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
  
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
  
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        // Ignore small scroll changes (e.g., caused by click-triggered layout shifts)
        ticking = false;
        return;
      }
  
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
  
      lastScrollY = currentScrollY;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  
  
  return (
    <div className="app-container">
      <button
        className={`toggle-sidebar-btn ${
          isSidebarOpen ? 'stay-visible' : scrollDir === 'up' ? 'hide-toggle-btn' : 'show-toggle-btn'
          }`}
          onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>

      <Sidebar
        handleChange={handleChange}
        show={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="main-content">
        <Nav query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </main>
    </div>
  );
};

export default App;