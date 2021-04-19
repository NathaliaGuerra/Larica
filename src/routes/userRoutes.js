const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');
const { userRegisterValidationRules } = require('../validations/userRegisterValidationRules');
const { userUpdateValidationRules } = require('../validations/userUpdateValidationRules');
const userController = require('../controllers/userController');
// const validationResult = require('../middlewares/validationResult');
// const multerMiddleware = require('../middlewares/multerMiddleware');

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
    userRegisterValidationRules(),
    // (req, res) => { userController.store(req, res) }
    
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
    //userUpdateValidationRules(),
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
        userController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { userController.destroy(req, res) }
);

module.exports = router;