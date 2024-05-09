import './navbar.css';
import { assets } from './assets';
//import { useState } from 'react';
import { Link} from 'react-router-dom';
const Navbar = ({setshowlogin}) => {
   // const [menu,setMenu] = useState(false)
    
    // const set = (event) =>{
    //     event.currentTarget.classList.toggle('active');
    // }
    
    
    return(
        <div className="nav">
            <Link to='/'><img src={assets.logo} alt="Logo" id='logo'/> </Link>
            <ul className="navbar-menu">
                <Link to='/'>Home</Link>
                <a href='#exploremenu' to="/Card">Menu</a>
                {/* <a href='#app-download' to="/Card">App</a> */}
                <a href='#footer' to="/Placeorder">Contact</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt='search'/>
                <div className="search-icon">
                    <Link to="/Card"><img src={assets.basket_icon} alt=''/></Link>
                    <div className="dot"></div>
                </div>
                <button onClick={() => setshowlogin(true)}>Sign in</button>
            </div>
        </div>
    )
}
export default Navbar;