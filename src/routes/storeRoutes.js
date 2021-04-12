const express = require('express');

const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', storeController.storeForm);

router.get('/cart', storeController.cart);

router.get(
    '/addresses', 
    async (req, res) => { storeController.AddressUser(req, res) }
);

module.exports = router;