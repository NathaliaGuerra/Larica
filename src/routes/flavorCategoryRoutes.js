const express = require('express');
const router = express.Router();

const flavorCategoryController = require('../controllers/flavorCategoryController');

router.get(
    '/',
    flavorCategoryController.index
);

router.get(
    '/create',
    flavorCategoryController.create
);

router.post(
    '/create',    
    async (req, res) => { 
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            let error = {};
            errors.array().map((err) => {
                error[err.param] = { msg: err.msg };
            });
            return res.render('pages/flavorCategories/create', { error });
        }
        flavorCategoryController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { flavorCategoryController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { flavorCategoryController.edit(req, res) }
);

router.put(
    '/edit/:id',
    //multerMiddleware.any(),
    async (req, res) => { 
        
        // let errors = await validationResult(req);
        // if(!errors.isEmpty()){
        //     let error = {};
        //     errors.array().map((err) => {
        //         error[err.param] = { msg: err.msg };
        //     });
        //     return res.render(`pages/flavorCategories/edit/${req.body.id}`, { error });
        // }
        flavorCategoryController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { flavorCategoryController.destroy(req, res) }
);

module.exports = router;