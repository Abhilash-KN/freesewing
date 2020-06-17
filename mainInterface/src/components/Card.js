import React from 'react'
import './styles/Card.css'

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.image} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.text}</p>
    </div>
  )
}
