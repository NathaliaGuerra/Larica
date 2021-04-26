const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');
const flavorAdminController = require('../../controllers/admin/flavorAdminController');
const multerProducts = require('../../middlewares/multerProduct');

router.get(
    '/',
    flavorAdminController.index
);

router.get(
    '/create',
    multerProducts.any(),
    flavorAdminController.create
);

router.post(
    '/create',    
    async (req, res) => { 
        flavorAdminController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { flavorAdminController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { flavorAdminController.edit(req, res) }
);

router.put(
    '/edit/:id',
    multerProducts.any(),
    async (req, res) => { 
        flavorAdminController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { flavorAdminController.destroy(req, res) }
);

module.exports = router;