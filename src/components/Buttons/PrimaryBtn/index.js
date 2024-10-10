import React from 'react'
import "./PrimaryBtn.css"

function PrimaryBtn(props) {
  const {label, onClick} = props;

  return (
    <button  onClick={onClick} className="primary-btn">{label}</button>
  )
}

export default PrimaryBtn