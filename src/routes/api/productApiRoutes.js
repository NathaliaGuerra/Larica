const express = require('express');
const router = express.Router();

const productApiController= require('../../controllers/api/productApiController');

router.get('/', productApiController.index);

module.exports = router;