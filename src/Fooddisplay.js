import React, { useContext } from "react";
import { Storecontext } from "./Storecontast";
import "./Fooddisplay.css";
//import { food_list } from "./assets.js";
import FooddisplayItem from "./FooddisplayItem.js";

const Fooddisplay = ({category,handleClick,cart1,handleRemoveClick,counter,handleCarts,carts,handleRemClick}) => {
  const { food_list } = useContext(Storecontext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Vegetables Near You.</h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FooddisplayItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                handleClick={handleClick}
                handleRemoveClick={handleRemoveClick}
                cart1={cart1}
                counter={counter}
                item={item}
                handleCarts={handleCarts}
                handleRemClick={handleRemClick}
                carts={carts}
              
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
// import React, { useContext } from "react";
// import { Storecontext } from "./Storecontast";
// import "./Fooddisplay.css";
// import FooddisplayItem from "./FooddisplayItem.js";

// const Fooddisplay = ({ category }) => { // Destructure category from props
//   const { food_list } = useContext(Storecontext);
//   return (
//     <div className="food-display" id="food-display">
//       <h2>Top Vegetables Near You.</h2>

//       <div className="food-display-list">
//         {Array.isArray(food_list) &&
//           food_list.map((item, index) => (
//             <FooddisplayItem
//               key={index}
//               id={item.id}
//               name={item.name}
//               description={item.description}
//               price={item.price}
//               image={item.image}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Fooddisplay;
