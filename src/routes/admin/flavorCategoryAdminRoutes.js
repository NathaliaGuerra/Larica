const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');
const flavorCategoryAdminController = require('../../controllers/admin/flavorCategoryAdminController');

router.get(
    '/',
    flavorCategoryAdminController.index
);

router.get(
    '/create',
    flavorCategoryAdminController.create
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
            return res.render('pages/admin/flavorCategories/create', { error });
        }
        flavorCategoryAdminController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { flavorCategoryAdminController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { flavorCategoryAdminController.edit(req, res) }
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
        //     return res.render(`pages/admin/flavorCategories/edit/${req.body.id}`, { error });
        // }
        flavorCategoryAdminController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { flavorCategoryAdminController.destroy(req, res) }
);

module.exports = router;