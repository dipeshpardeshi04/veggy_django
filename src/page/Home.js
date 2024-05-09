import React, { useState } from "react";
import './Home.css';
import Header from "../Header.js";
import Exploremenu from "../Exploremenu.js";
import Fooddisplay from "../Fooddisplay.js";
//import AppDownload from "../AppDownload.js";
import Homel from "../homeleft.js";
import Homel2 from "../homeleft2.js";
function Home({handleCarts,carts,handleRemClick}) {
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
      


    return(
        <div className="home">
            <div className="left">
                <Homel/>
                <Homel2 handleClick={handleClick} cart1={cart1}/>
            </div>
            <div className="right">
            <Header/>
            <Exploremenu category={category} setCategory={setCategory} handleClick={handleClick}/>
            <Fooddisplay category={category} handleClick={handleClick} cart1={cart1} handleRemoveClick={handleRemoveClick} counter={counter} handleCarts={handleCarts} carts={carts} handleRemClick={handleRemClick}/>
            {/* <AppDownload/> */}
            </div>
        </div>
    )
}
export default Home;