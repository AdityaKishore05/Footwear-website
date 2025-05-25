import React, { useState } from 'react';
import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import data from "./db/Data";
import Card from "./components/Card.jsx";
import './App.css'; // layout styles

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(data, selected, query) {
    let filtered = data;

    if (query) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filtered = filtered.filter(({ category, color, company, newPrice, title }) => {
        // Handle price filtering
        if (!isNaN(selected)) {
          const priceValue = parseFloat(newPrice.toString().replace('$', ''));
          const selectedValue = parseFloat(selected);
          
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
              return false;
          }
        }
        
        // Handle other filters (category, color, company, title)
        return (
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected
        );
      });
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

  const result = filteredData(data, selectedCategory, query);

  return (
    <div className="app-container">
      <button
        className="toggle-sidebar-btn"
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