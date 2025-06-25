import React from 'react';
import Side from "../../components/Side";

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>
      <div>
        <Side handleChange={handleChange} value="" title="All" name="price" />
        <Side handleChange={handleChange} value={50} title="$0 - $50" name="price" />
        <Side handleChange={handleChange} value={100} title="$50 - $100" name="price" />
        <Side handleChange={handleChange} value={150} title="$100 - $150" name="price" />
        <Side handleChange={handleChange} value={200} title="Over $150" name="price" />
      </div>
    </div>
  );
};

export default Price;
