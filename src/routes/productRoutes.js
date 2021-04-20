const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get(
    '/',
    productController.index
);

// router.get(
//     '/create',
//     productController.create
// );



module.exports = router;