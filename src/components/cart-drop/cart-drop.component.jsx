import React from "react";
import "./cart-drop.styles.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom.component";
import { CartItem } from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCart } from "../../redux/cart/cart.actions";
const CartDrop = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Cart Empty</span>
      )}

      {cartItems.length ? (
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCart());
          }}
        >
          Checkout
        </CustomButton>
      ) : null}
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDrop));
