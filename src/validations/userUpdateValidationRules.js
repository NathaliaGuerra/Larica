const { body, check } = require('express-validator');
const db = require('../database/models/index');

const userUpdateValidationRules = () => {

    return [
        check('firstName').notEmpty().withMessage('Your first name is required')
            .isString().withMessage('not string'),
        check('lastName').notEmpty().withMessage('Your last name is required')
            .isString().withMessage('not string'),
        check('email').isEmail().withMessage('Enter a valid email address')
            .exists().notEmpty().withMessage('Email is required')
            .isLength({max:255}).withMessage('max 255'),
        check('password').notEmpty().withMessage('Your password is required')
            .isLength({min:8}).withMessage('min 8 characters'),
        check('email').custom((value, { req }) => {
            if(req.body.email == userAuthenticated.email) {
                return db.User.findOne({
                    where: { email: value }
                }).then((user) => {
                    if (user) {
                        return Promise.reject('E-mail already in use');
                    }
                });
            } 
        }),
        // body('avatar').custom((value, { req }) => {
        //     if(typeof req.files.avatar != undefined) {
        //         return true;
        //     } else {
        //         throw new Error('The avatar is required');
        //     }
        // }),
        // body('avatar').custom((value, { req }) => {
        //     if(typeof req.files.avatar[0].size <= 2097150) { // 2MB
        //         return true;
        //     } else {
        //         throw new Error('Must be less than 2MB');
        //     }
        // })
    ]
}

module.exports = {
    userUpdateValidationRules,
}
