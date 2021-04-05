module.exports = {
    index: function(req, res){
        res.render('pages/products/products');
    },
    cart: function(req, res){
        res.render('pages/products/cart');
    },
    details: function(req, res){
        res.render('pages/products/product-details');
    }
}