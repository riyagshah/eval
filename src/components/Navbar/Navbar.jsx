
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../../store/auth/auth.actions";
// use react-router Link or NavLink
// const Link = <a />;


const Navbar = () => {
  // const { isAuth, changeAuth } = useContext(AuthContext);
  // const { cartCount } = useContext(CartContext)
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.auth);

  const handleLoginClick = () => {
    dispatch(logoutAPI());
  };

  const handleClick = () => {
    // changeAuth()
  }


  return (
    <div data-cy="navbar"
        style={{display:"flex", justifyContent:"space-between", padding:"20px"}}>
      <Link data-cy="navbar-home-link" to='/'>Logo</Link>
      <span style={{marginLeft:"900px"}} data-cy="navbar-cart-items-count">Cart :0</span>
      <button data-cy="navbar-login-logout-button" 
               onClick={handleLoginClick}>login
        {isAuthenticated? 'Logout':'Login'}
      </button>
    </div>
  );
};

export default Navbar;