export const addItemToCart = (cartItems, cartAdd) => {
    const existing = cartItems.find(cartItem => cartItem.id === cartAdd.id);
    if (existing) {
        return cartItems.map(citem =>
            citem.id === cartAdd.id ? { ...citem, quantity: citem.quantity + 1 } : citem
        );
    }
    return [...cartItems, { ...cartAdd, quantity: 1 }];
}
export const removeItemToCart = (cartItems, cartRemove) => {
    const existing = cartItems.find(cartItem => cartItem.id === cartRemove.id);
    if (existing.quantity ===1) {
        return cartItems.filter(citem =>
            citem.id !== cartRemove.id );
    }
    return cartItems.map(cartItem=>cartItem.id===cartRemove.id ? {...cartItem,quantity:cartItem.quantity-1}:cartItem)
}