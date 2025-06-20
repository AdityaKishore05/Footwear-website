import React from 'react'
import "./Category.css"
import Side from "../../components/Side"


const Category = ({handleChange}) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container ">
        <input type="radio" onChange={handleChange} value="" name="test"/><span className="checkmark "></span>All
        </label>
        <Side handleChange={handleChange}
        value="sneakers"
        title="sneakers"
        name="test"></Side>
      <Side handleChange={handleChange}
        value="flats"
        title="flats"
        name="test"></Side><Side handleChange={handleChange}
        value="sandals"
        title="sandals"
        name="test"></Side><Side handleChange={handleChange}
        value="sneakers"
        title="title"
        name="test"></Side>
      <Side handleChange={handleChange}
        value="heels"
        title="heels"
        name="test"></Side>
      </div>
      
    </>
    
  )
}

export default Category
