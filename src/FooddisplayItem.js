import React, { useEffect, useState } from "react";
import "./styless/fooddisplayItem.css";
import { assets } from "./assets";
import axios from "axios";
import toast from "react-hot-toast";

const FooddisplayItem = ({addToCart, id, prod_name, price, description, image, handleClick, item,handleRemoveClick,handleCarts,handleRemClick}) => {
  const [count, setCount] = useState(0);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
//
// const [cartItems, setCartItems] = useState([]);//1
// const [loading, setLoading] = useState(true);//1

// Fetch cart items after user login
useEffect(() => {
  const fetchCart = async () => {
    try {
      //add another url
      const response = await axios.get(`${backendUrl}/dipesh/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,  // assuming token-based authentication
        },
      });
      // setCartItems(response.data);//1
      // setLoading(false);//1
      console.log(response.data);//1
    } catch (error) {
      console.error('Error fetching cart:', error);
      toast.error('Error fetching cart:', error);
      // setLoading(false);//1
    }
  };

  fetchCart();
}, []);



const handleQuantityChange = (change) => {
  const newCount = count + change;
  setCount(newCount);
  
  // If the quantity is 0 or more, call addToCart
  if (newCount >= 0) {
    addToCart(id, newCount); // Pass product id and new quantity
  }
};

// Add product to the cart

  // useEffect(() => {
  //   console.log(name)
  //   console.log(count);
  // }, [name, count]);

  return (
    <div className="fooditem">
      <div className="food-item-img-con">
        <img className="fooditem-image" src={image} alt="" />
        {!count ? (
          <img
            className="add"
            onClick={() => {
              setCount(prev => prev + 1);
              handleClick(item);
              handleCarts(item);
              // addToCart(1);
              handleQuantityChange(1);
            }}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="item-count">
            <img
              onClick={() => {
                setCount(prev => prev - 1);
                handleRemoveClick(item);
                handleRemClick(item);
                // addToCart(count => count - 1);
                handleQuantityChange(-1);
              }}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{count}</p>
            <img
              onClick={() => {
                setCount(prev => prev + 1);
                handleClick(item);
                handleCarts(item);
                // addToCart(1);
                handleQuantityChange(1);
               
              }}
              src={assets.add_icon_green}
              alt=""
            />
            <div></div>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{id}</p>
          <p>{prod_name}</p>
        
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FooddisplayItem;
