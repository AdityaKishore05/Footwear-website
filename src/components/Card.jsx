import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div>
        <section className="card-container">
        <section className="card">
          <img src={img} alt={title} className="
          card-img"/>
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              {star} {star}{star}{star}{star}
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del>{newPrice}   
              </div>
              <div className="bag">
              <FaShoppingBag className="bag-icon"/>
              </div>
            </section>
          </div>

        </section>
      </section>
    </div>
  )
}

export default Card
