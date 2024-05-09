import React, { useEffect, useState } from "react";
import "./fooddisplayItem.css";
import { assets } from "./assets";

const FooddisplayItem = ({ id, name, price, description, image, handleClick, item,handleRemoveClick, cart1,counter,handleCarts,carts,handleRemClick}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(name)
    console.log(count);
  }, [name, count]);

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
          <p>{name}</p>
        
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FooddisplayItem;
