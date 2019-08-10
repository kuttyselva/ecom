export const addItemToCart=(cartItems,cartAdd)=>{
    const existing=cartItems.find(cartItem=>cartItem.id=== cartAdd.id);
    if(existing){
        return cartItems.map(citem=>
            citem.id===cartAdd.id ?{...citem,quantity:citem.quantity+1} : citem
        );
    }
   
        return [...cartItems,{...cartAdd,quantity:1}];
    
   
}