const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get(
    '/create',
    async (req, res) => { orderController.create(req, res) }
);

module.exports = router;