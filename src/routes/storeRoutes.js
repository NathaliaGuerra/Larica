const express = require('express');

const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', storeController.storeForm);

router.post(
    '/',
    async (req, res) => { storeController.storeCreate(req, res) }
);

router.get('/cart', storeController.cart);


module.exports = router;