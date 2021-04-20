const express = require('express');
const router = express.Router();

const productAdminController = require('../../controllers/admin/productAdminController');

router.get(
    '/',
    productAdminController.index
);

router.get(
    '/create',
    productAdminController.create
);

router.post(
    '/create',   
    async (req, res) => { 
        // let errors = validationResult(req);
        // if(!errors.isEmpty()){
        //     let error = {};
        //     errors.array().map((err) => {
        //         error[err.param] = { msg: err.msg };
        //     });
        //     return res.render('pages/products/create', { error });
        // }
        productAdminController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { productAdminController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { productAdminController.edit(req, res) }
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
        productAdminController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { productAdminController.destroy(req, res) }
);

module.exports = router;