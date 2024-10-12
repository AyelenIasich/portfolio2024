import React from 'react'
import "./PrimaryBtn.css"

function PrimaryBtn(props) {
  const {label, onClick, extraStyle} = props;

  return (
    <button  onClick={onClick} className={`primary-btn ${extraStyle} ? ${extraStyle} : ""`}>{label}</button>
  )
}

export default PrimaryBtn