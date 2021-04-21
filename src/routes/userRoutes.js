const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');
const { userRegisterValidationRules } = require('../validations/userRegisterValidationRules');
const { userUpdateValidationRules } = require('../validations/userUpdateValidationRules');
const userController = require('../controllers/userController');
const multerUser = require('../middlewares/multerUser');

router.get(
    '/',
    userController.index
);

router.get(
    '/register',
    userController.register
);

router.post(
    '/register',
    multerUser.any(),
    userRegisterValidationRules(),
    async (req, res) => { 
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            let error = {};
            errors.array().map((err) => {
                error[err.param] = { msg: err.msg };
            });
            return res.render('pages/users/register', { error });
        }
        userController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { userController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { userController.edit(req, res) }
);

router.put(
    '/edit/:id',
    multerUser.any(),
    userUpdateValidationRules(),
    async (req, res) => { 
        
        let errors = await validationResult(req);
        if(!errors.isEmpty()){
            let error = {};
            errors.array().map((err) => {
                error[err.param] = { msg: err.msg };
            });
            return res.render(`pages/users/edit/${req.body.id}`, { error });
        }
        userController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { userController.destroy(req, res) }
);

module.exports = router;