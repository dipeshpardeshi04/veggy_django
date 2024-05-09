//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar.js';
import Home from './page/Home.js';
import Card from './page/Card.js';
import Placeorder from './page/Placeorder.js';
import './index.js';
import Footer from './footer.js';
import { useState } from 'react';
import Loginpopup from './Loginpopup.js';
function App() {
  const [showlogin,setshowlogin] = useState(false);
  const [carts,setcarts] = useState([]);
  const[counter,setCounter]=useState(0)
  const handleCarts = (item) => {
    setcarts([...carts,item])
  }
  const handleRemClick = (itemToRemove) => {
    // Flag to track if an item has been removed
    let itemRemoved = false;
  
    // Filter out the item to be removed
    const updatedCart = carts.filter(item => {
      if (item === itemToRemove && !itemRemoved) {
        itemRemoved = true; // Set the flag to true after removing one item
        return false; // Do not include the item to be removed
      }
      return true; // Include all other items
    });
  
    // Update the state with the new array
    setcarts(updatedCart);
    
    // Update the counter only if an item was removed
    if (itemRemoved) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };
 
  return (
    
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className="App">
      
        <Navbar setshowlogin={setshowlogin}/>
        <Routes>
          <Route/>
          <Route path='/' element={<Home handleCarts={handleCarts} carts={carts} handleRemClick={handleRemClick}/>}/>
          <Route path='/Card' element={<Card  handleCarts={handleCarts} handleRemClick={handleRemClick} carts={carts}/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes>
        <Footer/>
       
    </div>
    </>
    
  );
}

export default App;
