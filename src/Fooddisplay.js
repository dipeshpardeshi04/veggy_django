import React, { useContext, useEffect, useState } from "react";
import { Storecontext } from "./Storecontast";
import "./styless/Fooddisplay.css";
import axios from "axios";
import { assets } from "./assets.js";
import FooddisplayItem from "./FooddisplayItem.js";

const Fooddisplay = ({addToCart,category,handleClick,cart1,handleRemoveClick,counter,handleCarts,carts,handleRemClick}) => {
  const { food_list } = useContext(Storecontext);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true); //1
  // const [error, setError] = useState(null);// 1

  useEffect(() => {
    // Make the request to the Django endpoint
    axios.get(`${backendUrl}/dipesh/`) // Adjust URL as needed
      .then(response => {
        // Handle the response data
        console.log(response.data);
        setData(response.data);
        // setLoading(false);//1
      })
      .catch(error => {
        // Handle errors
        // setError(error);//1
        // setLoading(false);//1
      });
  }, []);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Vegetables Near You.</h2>

      <div className="food-display-list">
        {[...data, ...food_list].map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FooddisplayItem
                key={index}
                id={item.id}
                prod_name={item.prod_name}
                description={item.description}
                price={item.price}
                image={item.image?item.image:assets.menu_5}
                handleClick={handleClick}
                handleRemoveClick={handleRemoveClick}
                cart1={cart1}
                counter={counter}
                item={item}
                handleCarts={handleCarts}
                handleRemClick={handleRemClick}
                carts={carts}
                addToCart={addToCart}
              
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
export default Fooddisplay;
