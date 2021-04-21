const express = require('express');
const router = express.Router();

const productAdminController = require('../../controllers/admin/productAdminController');
const multerProduct = require('../../middlewares/multerProduct');

router.get(
    '/',
    productAdminController.index
);

router.get(
    '/create',
    productAdminController.create
);

router.post(
    '/create',   
    multerProduct.any(),
    async (req, res) => {  productAdminController.store(req, res) }
);

router.get(
    '/:id',
    async (req, res) => { productAdminController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { productAdminController.edit(req, res) }
);

router.put(
    '/edit/:id',
    multerProduct.any(),
    async (req, res) => { productAdminController.update(req, res) }
);

router.delete(
    '/delete/:id',
    (req, res) => { productAdminController.destroy(req, res) }
);

module.exports = router;