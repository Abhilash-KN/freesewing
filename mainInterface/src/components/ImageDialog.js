import React from 'react'

export default function ImageDialog(props) {
  return (
    <div>
      <p>{props.imageName}</p>
      <img style={{ width: '170px' }} src={`/uploads/${props.imageName}`} alt={props.imageName} />
    </div>
  )
}
