const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get(
    '/',
    async (req, res) => { loginController.logout(req, res) }
);

module.exports = router;