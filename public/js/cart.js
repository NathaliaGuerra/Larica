if (localStorage == undefined || localStorage.cart == undefined || localStorage.cart == "[]") { 

    document.querySelector('p.cartEmpty').innerHTML = 'Your cart is Empty'

} else {

    let cart = localStorage.cart;
    let showItems = document.getElementById("showItems");

    if (typeof cart != undefined){

        let cart = JSON.parse(localStorage.cart);
        
        let total = 0;
        for(let x = 0; x < cart.length; x ++){  

            total = total + parseInt(cart[x].productPrice);

            showItems.innerHTML += `
                <tr>
                    <td>
                        <button type="button" class="btn btn-danger btn-sm" onclick="deleteCartItem(${x})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                    <th scope="row">1</th>
                    <td>${cart[x].productName} <br> (${cart[x].flavorsSelected.toString()})</td>
                    <td>$${cart[x].productPrice}</td>
                </tr>
                `
        }
        totalPrice.innerHTML += ` ${total}`
    }
}


let shopping = document.getElementById("shopping");
shopping.addEventListener("click", function() {

    localStorage.removeItem("cart");
    localStorage.removeItem("cartItemNumber");
    location.reload();

});