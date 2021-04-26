if (localStorage == undefined || localStorage.cart == undefined || localStorage.cart == "[]") { 

    document.querySelector('p.cartEmpty').innerHTML = 'Empty'

} else {

    let cart = window.localStorage.getItem("cart");
    let showOrderItems = document.getElementById("showOrderItems");

    if (typeof cart != "undefined"){

        let cart = localStorage.cart;
        cart = JSON.parse(cart);
        
        let total = 0;
        for(let i = 0; i < cart.length; i ++){  

            total = total + parseInt(cart[i].productPrice);
            showOrderItems.innerHTML += `
            <tr>
                <td>
                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteCartItem(${i})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
                <td>
                    <p>
                        <small>${cart[i].productName} (${cart[i].flavorsSelected.toString()})</small>
                    </p>
                </td>
                <td>
                    <p> $${cart[i].productPrice}</p>
                </td>
            </tr>
            `
        }

        localStorage.setItem("cartItemNumber", cart.length); 
        totalPrice.innerHTML += `$ ${total}`
    }
}