import React, { useState } from "react";
import './Home.css';
import Header from "../Header.js";
import Exploremenu from "../Exploremenu.js";
import Fooddisplay from "../Fooddisplay.js";
import axios from "axios";
// import Cookies from "js-cookie";
//import AppDownload from "../AppDownload.js";
import Homel from "../homeleft.js";
import Homel2 from "../homeleft2.js";
import toast from "react-hot-toast";
function Home({handleCarts,carts,handleRemClick}) {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [category,setCategory] = useState("All");
    const[cart1,setCart1]=useState([])
    const[counter,setCounter]=useState(0)
    const handleClick=(item)=>{
      //console.log(item)
      setCart1([...cart1,item])
      setCounter(prevCounter => prevCounter + 1)
    }
   

  

    const handleRemoveClick = (itemToRemove) => {
        // Flag to track if an item has been removed
        let itemRemoved = false;
      
        // Filter out the item to be removed
        const updatedCart = cart1.filter(item => {
          if (item === itemToRemove && !itemRemoved) {
            itemRemoved = true; // Set the flag to true after removing one item
            return false; // Do not include the item to be removed
          }
          return true; // Include all other items
        });
      
        // Update the state with the new array
        setCart1(updatedCart);
        
        // Update the counter only if an item was removed
        if (itemRemoved) {
          setCounter(prevCounter => prevCounter - 1);
        }
      };
      

      // addTo card 
      const addToCart = async (productId, quantity) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(
                `${backendUrl}/api/add-to-cart/`,
                { product_id: productId, quantity: quantity,  },
                {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Product added to cart:', response.data);
            toast.success("Product added to cart");
        } catch (error) {
            console.error('Error adding to cart:', error.response);
            toast.error(error.response.data.message);
            // Handle unauthorized or any other errors
            if (error.response && error.response.status === 401) {
                alert('Please log in to add items to the cart.');
            }
        }
    };
    

    return(
        <div className="home">
            <div className="left">
                <Homel/>
                <Homel2 handleClick={handleClick} cart1={cart1}/>
            </div>
            <div className="right">
            <Header/>
            <Exploremenu category={category} setCategory={setCategory} handleClick={handleClick}/>
            <Fooddisplay addToCart={addToCart} category={category} handleClick={handleClick} cart1={cart1} handleRemoveClick={handleRemoveClick} counter={counter} handleCarts={handleCarts} carts={carts} handleRemClick={handleRemClick}/>
            {/* <AppDownload/> */}
            </div>
        </div>
    )
}
export default Home;