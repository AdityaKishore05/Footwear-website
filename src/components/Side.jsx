import React from 'react'

const Side = ({handleChange, value, title, name, color}) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
    <span className="checkmark" style={{backgorundColor:color}}></span>
      {title}
    </label>
  )
}

export default Side
