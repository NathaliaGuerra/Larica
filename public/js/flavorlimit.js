 
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

        for (let x = 0; x < productSize.length; x++) {

            if (productSize[x].checked) {

                let flavorId = 'flavorLimit' + productSize[x].value; 
                var flavorLimit = document.getElementById(flavorId).innerText;

                sessionStorage.setItem("flavorLimit", flavorLimit);
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
    laricaFlavors.addEventListener("click", function(e) {

        cont = 0;
        let flavorsSelected = document.getElementsByName("flavorsSelected");
        for (let z = 0; z < flavorsSelected.length; z++) {

            if(flavorsSelected[z].checked) {

                cont++;
                if (sessionStorage.getItem("flavorLimit") < cont) {
                    document.getElementsByName("flavorsSelected").disabled = true;
                    e.preventDefault();
                }
            }
            
        }

    });

});