const db = require('../database/models/index');

module.exports = {

    index: async function(req, res){
       let categories = await db.FlavorCategory.findAll({
               where : {
                   status: true
               }
           }
        );
        res.render('pages/index', {categories});
    }
}