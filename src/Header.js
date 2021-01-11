import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
       
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/*  logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header__options">
          <spam className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</spam>
          <spam className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</spam>
        </div>
        </Link>
         <Link to='/orders'>
          <div className="header__options">
          <spam className="header_optionLineOne">Returns</spam>
          <spam className="header_optionLineTwo">& Orders</spam>
        </div>
        </Link>
        <div className="header__options">
          <spam className="header_optionLineOne">Your</spam>
          <spam className="header_optionLineTwo">Prime</spam>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <spam className="header__optionLineTwo header__basketCount">
              {basket.length}
            </spam>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
