import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'; // נתיב לתמונה
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { FiLogOut } from 'react-icons/fi';  // This is the correct import
import { FiShoppingCart } from 'react-icons/fi';
import '../css/Navbar.css';


const Navbar = () => {
  const { currentUser, logoutUser ,isAdmin} = useContext(UserContext);

  return (
    <nav className="navbar">
      <Link to="/"> </Link>

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Pack for Camp Logo" />
        </Link>
      </div>
      <div className="nav-links">
      <Link to="/cart" className="cart-icon">
  <FiShoppingCart size={24} />
</Link>
{/* //בדף הבית הוצגו הקישורים הבאים בלחיצה עליהם האתר ניתב את המשתמש לדך הרצוי את הנתיבים שפה הגדרנו במייאפ  */}
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/purchase">PerchasePage</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact Us</Link>
        {currentUser && isAdmin && (
        <Link to="/admin">Admin Panel</Link>
         )}


        <div className="user-section">


          {currentUser ? (
            <div className="user-controls">
              <span className="user-greeting">שלום,{currentUser.name}</span>
              <button onClick={logoutUser} className="logout-btn">
                <FiLogOut
                  size={20}
                  className="logout-icon"
                
           
                />  </button>
            </div>
          ) : (
            // קישורים להרשמה וכניסה למערכת
            <div className="auth-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
       
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
