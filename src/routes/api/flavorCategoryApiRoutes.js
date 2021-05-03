const express = require('express');
const router = express.Router();

const flavorCategoryApiController= require('../../controllers/api/flavorCategoryApiController');

router.get('/', flavorCategoryApiController.index);

module.exports = router;