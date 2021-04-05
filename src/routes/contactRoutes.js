const express = require('express');

const contactController = require('../controllers/contactController');

const router = express.Router();

router.get('/', contactController.contactForm);

module.exports = router;