module.exports = {
    index: function(req, res){
        res.render('pages/products');
    },
    cart: function(req, res){
        res.render('pages/cart');
    },
    details: function(req, res){
        res.render('pages/details');
    }
}