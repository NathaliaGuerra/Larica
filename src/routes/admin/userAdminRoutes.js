const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');
const { userRegisterValidationRules } = require('../../validations/userRegisterValidationRules');
const { userUpdateValidationRules } = require('../../validations/userUpdateValidationRules');
const userAdminController = require('../../controllers/admin/userAdminController');
const multerProduct = require('../../middlewares/multerProduct');

router.get(
    '/',
    userAdminController.index
);

router.get(
    '/create',
    userAdminController.create
);

router.post(
    '/create',
    multerProduct.any(),
    userRegisterValidationRules(),
    async (req, res) => { 
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            let error = {};
            errors.array().map((err) => {
                error[err.param] = { msg: err.msg };
            });
            return res.render('pages/admin/users/create', { error });
        }
        userAdminController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { userAdminController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { userAdminController.edit(req, res) }
);

router.put(
    '/edit/:id',
    multerProduct.any(),
    userUpdateValidationRules(),
    async (req, res) => { 
        
        let errors = await validationResult(req);
        if(!errors.isEmpty()){
            let error = {};
            errors.array().map((err) => {
                error[err.param] = { msg: err.msg };
            });
            return res.render(`pages/admin/users/edit/${req.body.id}`, { error });
        }
        userAdminController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { userAdminController.destroy(req, res) }
);

module.exports = router;