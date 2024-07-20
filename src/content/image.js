import React from 'react'
import my_pic from '../static/images/my_pic.png'

export default function Image() {
  return (
    <div >
      <img className="responsive" src={my_pic} alt="my_image"/>

    </div>
  )
}
