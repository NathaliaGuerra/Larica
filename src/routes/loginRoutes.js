const express = require('express');
const router = express.Router();

const validationResult = require('../middlewares/validationResult');
const { userLoginValidationRules } = require('../validations/userLoginValidationRules');
const loginController = require('../controllers/loginController');

router.get(
    '/',
    loginController.login
);

router.post(
    '/',
    userLoginValidationRules(),
    validationResult,
    async (req, res) => { loginController.checkUser(req, res) }
);

module.exports = router;