const express = require('express');
const router = express.Router();

const flavorController = require('../controllers/flavorController');

router.get(
    '/',
    flavorController.index
);

router.get(
    '/create',
    flavorController.create
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
            return res.render('pages/flavors/create', { error });
        }
        flavorController.store(req, res) 
    }
);

router.get(
    '/:id',
    async (req, res) => { flavorController.show(req, res) }
);

router.get(
    '/edit/:id',
    async (req, res) => { flavorController.edit(req, res) }
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
        //     return res.render(`pages/flavors/edit/${req.body.id}`, { error });
        // }
        flavorController.update(req, res)    
    }
);

router.delete(
    '/delete/:id',
    (req, res) => { flavorController.destroy(req, res) }
);

module.exports = router;