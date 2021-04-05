const express = require('express');

const storeController = require('../controllers/storeController');

const router = express.Router();

router.get('/', storeController.storeForm);

module.exports = router;