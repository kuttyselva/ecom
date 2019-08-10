export const toggleCart=() => ({
  type:'TOGGLE_CART'
})
export const clearCart=() => ({
    type:'CLEAR_CART'
  })
export const addItem=(item)=>({
type:'ADD_ITEM',
payload:item
})