import React from "react";
import { Storecontext } from "../Storecontast";
//import { assets } from "../assets";
import { useContext } from "react";

import './Card.css';
const Card = ({carts}) =>{
    //const {food_list,cardItems} = useContext(Storecontext);
    return(
        <div className="card">
            <div className="card-items">
                
                {
                    carts.map((item)=>{
                        //const quantity = cardItems[item.id] || 0;
                       
                            return(
                                <div className="card-items-title">
                                <img src={item.image} alt="" /> 
                                <div className="cards22">
                            <p><span id='sp'>Name :</span> {item.name}</p>
                            <p><span id='sp'>Id :</span> {item.id}</p>
                            <p><span id='sp'>Description :</span> {item.description}</p>
                            {/* <p><span id='sp'>Qty :</span> {counter}</p> */}
                            <p><span id='sp'>Price :</span> <span id='price'>{item.price}</span></p>
                            </div>
                                </div>
                            )
                        
                        //return null
                    })
                }
                <button id="buttonc">Place Order</button>
            </div>
        </div>
    )
}

export default Card;