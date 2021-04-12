module.exports = {
    index: function(req, res){
        res.render('pages/products/products');
    },
   
    details: function(req, res){
        res.render('pages/products/product-details');
    }
}