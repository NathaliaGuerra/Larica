function deleteCartItem(item) {

    let cart = localStorage.cart;
    cart = JSON.parse(cart);
    cart.splice(item, 1);
    
    if(cart.length == 0) {
        localStorage.removeItem("cartItemNumber");
    } else {
        localStorage.setItem("cartItemNumber", cart.length); 
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();

}