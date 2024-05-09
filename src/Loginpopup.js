import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from './assets'
const Loginpopup = ({setshowlogin}) => {
  const [currState,setcurrState] = useState('Sign Up')
  return (
    <div className="login-popup">
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState==='Login' ? <></> :  <input type="name" placeholder='Your name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==='Sign Up' ? 'Sign Up' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="login-checkbox" id="login-checkbox" required/>
          <p>By continuing, you agree to our <span>Terms and Privacy Policy</span></p>
        </div>
        {
          currState==='Login' ? <p>Create a new account ? <span onClick={() => setcurrState('Sign Up')}>Click here</span></p>:<p>Already have an account ? <span onClick={() => setcurrState('Login')}>Login here</span></p>
        }

      </form>
    </div>
  )
}

export default Loginpopup
