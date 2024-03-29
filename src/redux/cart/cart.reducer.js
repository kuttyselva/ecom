import { addItemToCart, removeItemToCart } from "./cart.util";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden
            };
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: []
            }
        case 'CLEAR_ITEM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)

            }
        default:
            return state;
    }
}
export default cartReducer;