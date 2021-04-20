const db = require('../database/models/index');
const PRODUCT_ACTIVE = true;
const PRODUCT_NOT_ACTIVE = false;

module.exports = {

    index: async (req, res) => {
        res.render('pages/products/products');
    },

    show: async (req, res) => {
        await db.Product.findOne({
            where: { id: req.params.id }
        }).then((product) => {
            if(product) {
                res.render('pages/products/product-details', {product: product});
            } else {
                res.render('pages/products', { errors: 'Product does not exist' });
            }
        });
    }

}