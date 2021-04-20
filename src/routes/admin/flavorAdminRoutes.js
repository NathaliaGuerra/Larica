const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');
const flavorAdminController = require('../../controllers/admin/flavorAdminController');

router.get(
    '/',
    flavorAdminController.index
);

router.get(
    '/create',
    flavorAdminController.create
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
        //     return res.render('pages/admin/flavors/create', { error });
        // }
        flavorAdminController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { flavorAdminController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { flavorAdminController.edit(req, res) }
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
        //     return res.render(`pages/admin/flavors/edit/${req.body.id}`, { error });
        // }
        flavorAdminController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { flavorAdminController.destroy(req, res) }
);

module.exports = router;