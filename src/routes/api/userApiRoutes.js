const express = require('express');
const router = express.Router();

const userApiController= require('../../controllers/api/userApiController');

router.get('/', userApiController.index);
router.get(
    '/latestUser',
    async (req, res) => {
        userApiController.latestUser(req, res)
    }
);
router.get(
    '/:id', 
    async (req, res) => {
        userApiController.show(req, res)
    }
);


module.exports = router;