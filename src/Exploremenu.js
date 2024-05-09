import React from "react";
import './Exploremenu.css';
import { menu_list } from "./assets";
const Exploremenu = ({category,setCategory}) =>{
    return (
        <div className="exploremenu" id="exploremenu">
            <h1>Explore our Menu</h1>
            <p className="exploremenu-text">"Discover Freshness, Explore Flavor: Your Journey Through Veggie Paradise Begins Here!"</p>
            <div className="exploremenu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={() => setCategory(prev => prev === "All" ? item.menu_name : (prev === item.menu_name ? "All" : item.menu_name))} key={index} className="exploremenu-list-item">

                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}
export default Exploremenu;