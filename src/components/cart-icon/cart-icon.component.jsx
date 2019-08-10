import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping.svg';
import {connect} from 'react-redux'
import './cart-icon.styles.scss';
import { toggleCart } from '../../redux/cart/cart.actions';
const CartIcon=({toggleCart,itemCount})=> {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapStateToProps=({cart:{cartItems}})=>({
    itemCount:cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0)
})
const mapDispatchToProps=dispatch=>({
    toggleCart:()=>dispatch(toggleCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

