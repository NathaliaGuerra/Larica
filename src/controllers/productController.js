module.exports = {
    index: function(req, res){
        res.render('views/products');
    },
    cart: function(req, res){
        res.render('views/car');
    },
    details: function(req, res){
        res.render('views/product-details');
    }
}