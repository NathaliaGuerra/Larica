const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get(
    '/',
    productController.index
);

router.get(
    '/create',
    productController.create
);

router.post(
    '/create',    
    async (req, res) => { 
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            let error = {};
            errors.array().map((err) => {
                error[err.param] = { msg: err.msg };
            });
            return res.render('pages/products/create', { error });
        }
        productController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { productController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { productController.edit(req, res) }
);

router.put(
    '/edit/:id',
    //multerMiddleware.any(),
    async (req, res) => { 
        
        // let errors = await validationResult(req);
        // if(!errors.isEmpty()){
        //     let error = {};
        //     errors.array().map((err) => {
        //         error[err.param] = { msg: err.msg };
        //     });
        //     return res.render(`pages/users/edit/${req.body.id}`, { error });
        // }
        productController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { productController.destroy(req, res) }
);

module.exports = router;