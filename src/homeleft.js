import React from 'react'
import { assets } from './assets'
import './homeleft.css'
const homeleft = () => {
  return (
    <div className='homele'>
      <div className="profile">
        <img src={assets.profile} alt="" />
        <h6>About Veggy</h6>
      </div>
      <p>At Veggy.com, we're passionate about providing you with the freshest and highest-quality vegetables right at your fingertips. Our mission is simple: to make it easy and convenient for you to access farm-fresh produce from the comfort of your home. Founded with a vision to revolutionize the way people shop for vegetables, Veggy.com started as a humble initiative to bridge the gap between farmers and consumers. We believe that everyone deserves access to fresh and nutritious vegetables, regardless of their location or lifestyle. With this ethos at our core, we've grown into a trusted online marketplace for all your vegetable needs.</p>
    </div>
  )
}

export default homeleft
