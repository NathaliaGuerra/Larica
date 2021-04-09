const express = require('express');
const registerValidator = require('../validations/registerValidator');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.register);

router.post(
    '/', 
    registerValidator,
    userController.registerStore
);


module.exports = router;