const express = require('express');

const homeController = require('../controllers/homeController');

const router = express.Router();

router.get(
    '/',
    async (req, res) => { homeController.index(req, res) }
);

module.exports = router;