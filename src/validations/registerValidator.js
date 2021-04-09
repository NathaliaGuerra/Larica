const {body, check, validationResult} = require('express-validator');

module.exports = [
    check('firstName').notEmpty().withMessage('First name is required').isString().withMessage('not string'),
    check('lastName').notEmpty().withMessage('Last name is required').isString().withMessage('not string'),
    check('email').isEmail().withMessage('Enter a valid email').notEmpty().withMessage('Email is required'),
    check('password').notEmpty().withMessage('password is required').isLength({min: 8}).withMessage('min 8 characters')
];