const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.index);
router.get('/cart', productController.cart);
router.get('/details', productController.details);

module.exports = router;