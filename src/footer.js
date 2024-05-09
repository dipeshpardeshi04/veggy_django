import React from "react";
import "./footer.css";
import { assets } from "./assets.js";
const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img id="footer-logo" src={assets.logo} alt="" />
          <p>
          "Veggy.com: Your One-Stop Destination for Fresh, Organic Vegetables! From Farm to Table, We Connect You with the Finest Produce. Browse, Select, and Order Your Favorites with Ease. Experience Convenience and Quality with Veggy.com!"
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact</h2>
            <ul>
                <li>9075050300</li>
                <li>pardeshidipesh9050@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      
      <p className="footer-copyright">© 2024 Veggy. All rights reserved</p>
    </div>
  );
};

export default footer;
