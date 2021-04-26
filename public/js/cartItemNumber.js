window.addEventListener("load", function() {

    var cartItemNumber = localStorage.getItem("cartItemNumber");
    if (cartItemNumber != null || cartItemNumber != undefined) {
        document.getElementById("cartItemNumber").innerHTML += `${cartItemNumber}`;
    }
    
});