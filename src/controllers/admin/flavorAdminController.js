const db = require('../../database/models/index');
const FLAVOR_ACTIVE = true;
const FLAVOR_NOT_ACTIVE = false;

module.exports = {

    index: async (req, res) => {
        let flavors = await db.Flavor.findAll();
        let flavorCategories = await db.FlavorCategory.findAll();
        res.render('pages/admin/flavors/flavors', { flavors, flavorCategories });
    },

    create: async (req, res) => {
        let flavorCategories = await db.FlavorCategory.findAll();
        res.render('pages/admin/flavors/create', { flavorCategories });
    },

    store: async (req, res) => {
        await db.Flavor.create({
            name: req.body.name,
            flavoCategoryId: req.body.flavorCategoryId,
            description: req.body.description,
            photo:  (req.files != undefined) ? req.files[0].filename : 'no-image-available.jpeg',
            status: FLAVOR_ACTIVE
        }).then((flavor) => {
            res.redirect('/admin/flavors');
        }).catch((error) => {
            console.log(error);
            res.render('pages/admin/flavors/create', { errors: error.message });
        });
    },

    show: async (req, res) => {
        await db.Flavor.findOne({
            where: { id: req.params.id }
        }).then((flavor) => {
            if(flavor) {
                res.render('pages/admin/flavors/show', {flavor: flavor});
            } else {
                res.render('pages/admin/flavors', { errors: 'Flavor does not exist' });
            }
        });
    },

    edit: async (req, res) => {
        await db.Flavor.findOne({
            where: { id: req.params.id }
        }).then( async (flavor) => {
            if(flavor) {
                let flavorCategories = await db.FlavorCategory.findAll();
                res.render('pages/admin/flavors/edit', { flavor, flavorCategories });
            } else {
                res.render('pages/admin/flavors', { error: 'Flavor does not exist' });
            }
        });
    },

    update: async (req, res) => {
     
        // TODO no funciona el update
        await db.Flavor.findOne({
            where: { id: req.params.id }
        }).then(async (flavor) => {
            if(flavor) {
                var flavorDataUpdate = {};
                flavorDataUpdate.name = req.body.name ? req.body.name : flavor.name;
                flavorDataUpdate.description = req.body.description ? req.body.description : flavor.description;
                flavorDataUpdate.photo = req.files[0].filename ? req.files[0].filename : flavor.photo,
                flavorDataUpdate.status = req.body.status ? req.body.status : flavor.status
                await db.Flavor.update(flavorDataUpdate, {
                    where: {
                      id: req.params.id
                    }
                  }).then((flavorUpdated) => {
                      res.redirect(req.params.id);
                  }).catch((error) => {
                    console.log(error);
                    res.redirect(req.params.id, { error: 'Data could not be updated, try again' });
                  });
            } else {
                let error = 'Flavor does not exist';
                console.log('else ' + error);
                res.redirect(req.params.id, { error: error });
                
            }
        }).catch((error) => {
            console.log('catch final ' + error);
            res.redirect(req.params.id, { error: error });
        });
    },

    destroy: async (req, res) => {
        await db.Flavor.destroy({
            where: {
              id: req.params.id
            }
        }).then(() => {
            res.redirect('/admin/flavors');
        }).catch((error) => {
            res.render('/admin/flavors', {error: error});
        });
    }

}