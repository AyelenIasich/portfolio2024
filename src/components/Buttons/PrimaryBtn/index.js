import React from 'react'
import "./PrimaryBtn.css"

function PrimaryBtn(props) {
  const {label, onClick, extraStyle, isHireMe} = props;

  return (
    <button  onClick={onClick}  className={`primary-btn ${extraStyle ? extraStyle : ""} ${isHireMe ? "isHireBtn" : ""}`}>{label}</button>
  )
}

export default PrimaryBtn