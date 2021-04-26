window.addEventListener("load", function() {

    // Set variables to start
    sessionStorage.removeItem("flavorLimit");

    // //////////////////////////////
    // Validation for flavor limits
    // //////////////////////////////

    // 1st Event - Get flavor limit by productSize selected
    let laricaProductSize = document.getElementById("laricaProductSize");
    laricaProductSize.addEventListener("click", function(){

        let productSize = document.getElementsByName('productSize');
        var orderItem = {};
        for (let x = 0; x < productSize.length; x++) {

            if (productSize[x].checked) {

                let productSizeName = document.getElementById('productSizeName' + productSize[x].value).innerText;
                let productSizePrice = document.getElementById('productSizePrice' + productSize[x].value).innerText;
                let flavorId = 'flavorLimit' + productSize[x].value; 
                var flavorLimit = document.getElementById(flavorId).innerText;

                orderItem.productId = productSize[x].value;
                orderItem.productName = productSizeName;
                orderItem.productPrice = productSizePrice;
                orderItem.productFlavorLimit = flavorLimit;

                localStorage.setItem("orderItem", JSON.stringify(orderItem));
                localStorage.setItem("flavorLimit", flavorLimit);
                uncheckSelectedFlavors();

                // console.log(flavorLimit)

            }
              
        }

    });

    // Reset the selected flavors if the customer changes the product size
    var uncheckSelectedFlavors = function(){
        let flavorsSelected = document.getElementsByName("flavorsSelected");
        for (let y = 0; y < flavorsSelected.length; y++) {
            if(flavorsSelected[y].checked) {
                flavorsSelected[y].checked = false;
            }
            
        }
    }

    // 2nd Event - Apply limit on checkbox of flavors
    let laricaFlavors = document.getElementById("laricaFlavors");
    laricaFlavors.addEventListener("click", function(event) {

        cont = 0;
        let flavorsSelected = document.getElementsByName("flavorsSelected");
        var flavors = [];
        for (let z = 0; z < flavorsSelected.length; z++) {

            if(flavorsSelected[z].checked) {

                cont++;
                if (localStorage.getItem("flavorLimit") < cont) {
                    document.getElementsByName("flavorsSelected").disabled = true;
                    event.preventDefault();
                }

                let flavorsValue = flavorsSelected[z].value;
                let flavorNameId = 'flavorName' + flavorsValue;
                let flavorName = document.getElementById(flavorNameId).innerText;
                flavors.push(flavorName);
                
            }
            
        }

        let orderItem = localStorage.getItem("orderItem");
        orderItem = JSON.parse(orderItem);
        orderItem.flavorsSelected = flavors;
        localStorage.setItem("orderItem", JSON.stringify(orderItem));
       

    });

    // 3rd Event
    let fornStore = document.getElementById("formStore");
    fornStore.addEventListener("submit", function() {

        let cart = [];
        if (localStorage.getItem("cart") == undefined) {
            cart = new Array;
            let orderItem = localStorage.getItem("orderItem");
            cart.push(JSON.parse(orderItem));
            localStorage.setItem("cart",JSON.stringify(cart));
        } else if (localStorage.getItem("cart") != undefined) {
            cart = JSON.parse(window.localStorage.getItem("cart"));
            let orderItem = JSON.parse(localStorage.getItem("orderItem"));
            cart.push(orderItem);
            localStorage.setItem("cart",JSON.stringify(cart));
            
        }

        localStorage.removeItem("orderItem");
        localStorage.removeItem("flavorLimit");  

    });

});