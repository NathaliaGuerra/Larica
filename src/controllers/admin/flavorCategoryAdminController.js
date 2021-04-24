const db = require('../../database/models/index');
const CATEGORY_ACTIVE = true;
const CATEGORY_NOT_ACTIVE = false;

module.exports = {

    index: async (req, res) => {
        let categories = await db.FlavorCategory.findAll();
        console.log(categories);
        res.render('pages/admin/flavorCategories/categories', { categories, categories });
    },

    create: (req, res) => {
        res.render('pages/admin/flavorCategories/create');
    },

    store: async (req, res) => {
        await db.FlavorCategory.create({
            name: req.body.name,
            photo:  req.file.filename,
            status: CATEGORY_ACTIVE
        }).then(() => {
            res.redirect('/admin/flavorCategories');
        }).catch((error) => {
            res.render('pages/admin/flavorCategories/create', { errors: error.message });
        });
    },

    show: async (req, res) => {
        await db.FlavorCategory.findOne({
            where: { id: req.params.id }
        }).then((category) => {
            if(category) {
                res.render('pages/admin/flavorCategories/show', {category: category});
            } else {
                res.render('pages/admin/flavorCategories', { errors: 'Category does not exist' });
            }
        });
    },

    edit: async (req, res) => {
        await db.FlavorCategory.findOne({
            where: { id: req.params.id }
        }).then((category) => {
            if(category) {
                res.render('pages/admin/flavorCategories/edit', { category });
            } else {
                res.render('pages/admin/flavorCategories', { error: 'Category does not exist' });
            }
        });
    },

    update: async (req, res) => {
     
        // TODO no funciona el update
        await db.FlavorCategory.findOne({
            where: { id: req.params.id }
        }).then(async (category) => {
            if(category) {
                var categoryDataUpdate = {};
                categoryDataUpdate.name = req.body.name ? req.body.name : category.name;
                categoryDataUpdate.photo = req.body.photo ? req.body.photo : category.photo,
                categoryDataUpdate.status = req.body.status ? req.body.status : category.status
                await db.FlavorCategory.update(categoryDataUpdate, {
                    where: {
                      id: req.params.id
                    }
                  }).then((categoryUpdated) => {
                      res.redirect(req.params.id);
                  }).catch((error) => {
                    console.log(error);
                    res.redirect(req.params.id, { error: 'Data could not be updated, try again' });
                  });
            } else {
                let error = 'Category does not exist';
                console.log('else ' + error);
                res.redirect(req.params.id, { error: error });
                
            }
        }).catch((error) => {
            console.log('catch final ' + error);
            res.redirect(req.params.id, { error: error });
        });
    },

    destroy: async (req, res) => {
        await db.FlavorCategory.destroy({
            where: {
              id: req.params.id
            }
        }).then(() => {
            res.redirect('/admin/flavorCategories');
        }).catch((error) => {
            res.render('/admin/flavorCategories', {error: error});
        });
    }

}