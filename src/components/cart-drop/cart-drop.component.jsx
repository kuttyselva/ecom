import React, { Component } from "react";
import "./cart-drop.styles.scss";
import CustomButton from "../custom-button/custom.component";
const CartDrop = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
        <CustomButton>Chechout</CustomButton>
    </div>
  </div>
);
export default CartDrop;
