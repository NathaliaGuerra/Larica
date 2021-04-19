const { body, check } = require('express-validator');
const db = require('../database/models/index');
const bcrypt = require('bcrypt');

const userLoginValidationRules = () => {

    return [
        check('email').isEmail().withMessage('Enter a valid email address')
            .exists().notEmpty().withMessage('Email is required')
            .isLength({max:255}).withMessage('max 255'),
        check('password').notEmpty().withMessage('Your password is required')
            .isLength({min:8}).withMessage('min 8 characters'),
        check('email').custom((value) => {
            return db.User.findOne({
                where: { email: value }
            }).then((user) => {
                if (!user) {
                    return Promise.reject('Email does not exist');
                }
            });
        }),
        body('password').custom((value, { req }) => {
            return db.User.findOne({
                where: { email: req.body.email }
            }).then((user) => {
                if (!bcrypt.compareSync(value, user.password)) {
                    return Promise.reject('Password invalid, try again');
                }
            });
        }),
    ]
}

module.exports = {
    userLoginValidationRules,
}
