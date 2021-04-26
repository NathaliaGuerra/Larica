const db = require('../../database/models/index');
const PRODUCT_ACTIVE = true;
const PRODUCT_NOT_ACTIVE = false;

module.exports = {

    index: async (req, res) => {
        let products = await db.Product.findAll();
        console.log(products);
        res.render('pages/admin/products/products', { products, products });
    },

    create: (req, res) => {
        res.render('pages/admin/products/create');
    },

    store: async (req, res) => {
        await db.Product.create({
            name: req.body.name,
            price: req.body.price,
            flavorLimit: req.body.flavorLimit,
            photo:  (req.files != undefined) ? req.files[0].filename : 'no-image-available.jpeg', 
            status: PRODUCT_ACTIVE
        }).then((product) => {
            console.log(product);
            res.redirect('/admin/products');
        }).catch((error) => {
            res.render('pages/admin/products/create', { errors: error.message });
        });
    },

    show: async (req, res) => {
        await db.Product.findOne({
            where: { id: req.params.id }
        }).then((product) => {
            if(product) {
                res.render('pages/admin/products/show', {product: product});
            } else {
                res.render('pages/admin/products', { errors: 'Product does not exist' });
            }
        });
    },

    edit: async (req, res) => {
        await db.Product.findOne({
            where: { id: req.params.id }
        }).then((product) => {
            if(product) {
                res.render('pages/admin/products/edit', { product });
            } else {
                res.render('pages/admin/products', { error: 'Product does not exist' });
            }
        });
    },

    update: async (req, res) => {
     
        // TODO no funciona el update
        await db.Product.findOne({
            where: { id: req.params.id }
        }).then(async (product) => {
            if(product) {
                var productDataUpdate = {};
                productDataUpdate.name = req.body.name ? req.body.name : product.name;
                productDataUpdate.price = req.body.price ? req.body.price : product.price;
                productDataUpdate.flavorLimit = req.body.flavorLimit ? req.body.flavorLimit : product.flavorLimit;
                productDataUpdate.photo = req.files ? req.files[0].filename : product.photo,
                productDataUpdate.status = req.body.status ? req.body.status : product.status
                await db.Product.update(productDataUpdate, {
                    where: {
                      id: req.params.id
                    }
                  }).then((productUpdated) => {
                      res.redirect(req.params.id);
                  }).catch((error) => {
                    console.log(error);
                    res.redirect(req.params.id, { error: 'Data could not be updated, try again' });
                  });
            } else {
                let error = 'Product does not exist';
                console.log('else ' + error);
                res.redirect(req.params.id, { error: error });
                
            }
        }).catch((error) => {
            console.log('catch final ' + error);
            res.redirect(req.params.id, { error: error });
        });
    },

    destroy: async (req, res) => {
        await db.Product.destroy({
            where: {
              id: req.params.id
            }
        }).then(() => {
            res.redirect('/admin/products');
        }).catch((error) => {
            res.render('/pagess/admin/products', {error: error});
        });
    }

}