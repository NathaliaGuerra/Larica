const express = require('express');
const router = express.Router();

const { validationResult } = require('express-validator');
const flavorCategoryAdminController = require('../../controllers/admin/flavorCategoryAdminController');
const multerProducts = require('../../middlewares/multerProduct');

router.get(
    '/',
    flavorCategoryAdminController.index
);

router.get(
    '/create',
    flavorCategoryAdminController.create
);

router.post(
    '/create', 
    multerProducts.any(),   
    async (req, res) => { flavorCategoryAdminController.store(req, res) }
);

router.get(
    '/:id',
    async (req, res) => { flavorCategoryAdminController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { flavorCategoryAdminController.edit(req, res) }
);

router.put(
    '/edit/:id',
    multerProducts.any(), 
    async (req, res) => { flavorCategoryAdminController.update(req, res) }
);

router.delete(
    '/delete/:id',
    (req, res) => { flavorCategoryAdminController.destroy(req, res) }
);

module.exports = router;