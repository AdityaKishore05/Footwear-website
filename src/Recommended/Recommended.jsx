import React from 'react'
import "./Recommended.css"
import Button from "../components/Button"

const Recommended = ({handleClick}) => {
  return (
    <>
      <div>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products"></Button>
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas"></Button>
          <Button onClickHandler={handleClick} value="Puma" title="Puma"></Button>
          <Button onClickHandler={handleClick} value="Nike" title="Nike"></Button>
          <Button onClickHandler={handleClick} value="Vans" title="Vans"></Button>

        </div>
      </div>
      
    </>
  )
}

export default Recommended
