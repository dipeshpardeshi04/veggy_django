import React from 'react';
import './styless/homeleft2.css';
import { assets } from './assets';
// import { food_list } from './assets';
// import Leftref from './leftref';

const Homeleft2 = ({cart1}) => {
  return (
    <div className='homeleft2'>
     <h2>Your Added Items</h2>
     <hr />
     {
      
     cart1.map((item,counter)=> {
     
      return(
        <>
      <div className="leftsub">
        
         <img src={assets.menu_3} alt="" /> 
        <p><span id='sp'>Name :</span> {item.name}</p>
        <p><span id='sp'>Id :</span> {item.id}</p>
        <p><span id='sp'>Qty :</span> {counter}</p>
        <p><span id='sp'>Price :</span> <span id='price'>{item.price}</span></p>
       
      
    </div>

        </>
      )
    
    
     })
    }
    
     <p>{cart1.name}</p>

    </div>
  );
};

export default Homeleft2;
