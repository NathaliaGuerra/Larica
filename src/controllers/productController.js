const db = require('../database/models/index');
const PRODUCT_ACTIVE = true;
const PRODUCT_NOT_ACTIVE = false;

module.exports = {

    index: async (req, res) => {
        let products = await db.Product.findAll();
        console.log(products);
        res.render('pages/products/products', { products, products });
    },

    create: (req, res) => {
        res.render('pages/products/create');
    },

    store: async (req, res) => {
        await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            photo:  null,
            status: PRODUCT_ACTIVE
        }).then(() => {
            res.render('pages/products');
        }).catch((error) => {
            res.render('pages/products/create', { errors: error.message });
        });
    },

    show: async (req, res) => {
        await db.Product.findOne({
            where: { id: req.params.id }
        }).then((product) => {
            if(product) {
                res.render('pages/products/show', {product: product});
            } else {
                res.render('pages/products', { errors: 'Product does not exist' });
            }
        });
    },

    edit: async (req, res) => {
        await db.Product.findOne({
            where: { id: req.params.id }
        }).then((product) => {
            if(product) {
                res.render('pages/products/edit', { product });
            } else {
                res.render('pages/products', { error: 'Product does not exist' });
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
                productDataUpdate.description = req.body.description ? req.body.description : product.description;
                productDataUpdate.category = req.body.category ? req.body.category : product.category;
                productDataUpdate.photo = requ.body.photo ? req.body.photo : product.photo,
                productDataUpdate.status = requ.body.status ? req.body.status : product.status
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
            res.redirect('/products');
        }).catch((error) => {
            res.render('/products', {error: error});
        });
    }

}