const express = require('express');

const usController = require('../controllers/usController');

const router = express.Router();

router.get('/', usController.index);

module.exports = router;