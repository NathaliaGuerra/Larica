const express = require('express');
const router = express.Router();

const flavorApiController = require('../../controllers/api/flavorApiController');

router.get('/', flavorApiController.index);

router.get(
    '/latestFlavor',
    async (req, res) => {
        flavorApiController.latestFlavor(req, res)
    }
);

router.get(
    '/:id',
    async (req, res) => {
        flavorApiController.show(req, res)
    }
)

module.exports = router;