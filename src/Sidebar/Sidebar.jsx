import React from 'react'
import "./Sidebar.css"
import Category from "./Category/Category"
import Price from "./Price/Price"
import { IoClose } from "react-icons/io5";

const Sidebar = ({ handleChange, show, onClose }) => {
  return (
    <>
      <section className={`sidebar ${show ? "show" : ""}`}>
          <button className="close-btn" onClick={onClose}><IoClose />
          </button>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidebar
