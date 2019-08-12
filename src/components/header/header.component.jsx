import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDrop from "../cart-drop/cart-drop.component";
import { currentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <a className="option" target="_blank" href="http://www.github.com/kuttyselva">
          CONTACT
        </a>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <b>SIGN OUT</b>
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDrop />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser:currentUser,
  hidden:selectHidden
});

export default connect(mapStateToProps)(Header);
