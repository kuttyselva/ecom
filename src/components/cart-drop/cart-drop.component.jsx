import React, { Component } from "react";
import "./cart-drop.styles.scss";
import {connect} from 'react-redux'
import CustomButton from "../custom-button/custom.component";
import { CartItem } from "../cart-item/cart-item.component";
const CartDrop = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
       cartItems.map(item=><CartItem key={item.id} item={item}/>) 
      }
      
        <CustomButton>Chechout</CustomButton>
    </div>
  </div>
);
const mapStateToProps=({cart:{cartItems}})=>({
cartItems
})
export default connect(mapStateToProps)(CartDrop)

