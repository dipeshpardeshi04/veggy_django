import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>"Explore our delicious vegetarian options"</h2>
        <p>
          From farm to fork, we've got your veggies covered! Book your freshest
          picks now!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}
export default Header;
