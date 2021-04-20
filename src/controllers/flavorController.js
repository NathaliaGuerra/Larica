const db = require('../database/models/index');
const FLAVOR_ACTIVE = true;
const FLAVOR_NOT_ACTIVE = false;

module.exports = {

    index: async (req, res) => {
        let flavors = await db.Flavor.findAll();
        console.log(flavors);
        res.render('pages/flavors/flavors', { flavors, flavors });
    },

    create: (req, res) => {
        res.render('pages/flavors/create');
    },

    store: async (req, res) => {
        await db.Flavor.create({
            name: req.body.name,
            description: req.body.description,
            photo:  null,
            status: FLAVOR_ACTIVE
        }).then(() => {
            res.render('pages/flavors');
        }).catch((error) => {
            res.render('pages/flavors/create', { errors: error.message });
        });
    },

    show: async (req, res) => {
        await db.Flavor.findOne({
            where: { id: req.params.id }
        }).then((flavor) => {
            if(flavor) {
                res.render('pages/flavors/show', {flavor: flavor});
            } else {
                res.render('pages/flavors', { errors: 'Flavor does not exist' });
            }
        });
    },

    edit: async (req, res) => {
        await db.Flavor.findOne({
            where: { id: req.params.id }
        }).then((flavor) => {
            if(flavor) {
                res.render('pages/flavors/edit', { flavor });
            } else {
                res.render('pages/flavors', { error: 'Flavor does not exist' });
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
                flavorDataUpdate.photo = requ.body.photo ? req.body.photo : flavor.photo,
                flavorDataUpdate.status = requ.body.status ? req.body.status : flavor.status
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
            res.redirect('/flavors');
        }).catch((error) => {
            res.render('/flavors', {error: error});
        });
    }

}