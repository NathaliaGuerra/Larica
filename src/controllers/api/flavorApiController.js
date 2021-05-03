const db = require('../../database/models/index');
const ENDPOINT = "endpoint";
const PATH_API_FLAVORS = "/api/flavors/";
const PATH_URL_PHOTO_PRODUCTS = "/uploads/products/";

module.exports = {

    index: async (req, res) => {
        console.log("hello")
        await db.Flavor.findAll({
            attributes: ["id", 'flavorCategoryId', 'name', 'description', 'photo', 'status']
            }).then(function (flavors) {
                for (let i = 0; i < flavors.length; i++) {
                    flavors[i].setDataValue(ENDPOINT, `${PATH_API_FLAVORS}${flavors[i].id}`),
                    flavors[i].photo = `${PATH_URL_PHOTO_PRODUCTS}${flavors[i].photo}`
                }

                let response = {
                    meta: {
                        status: 200,
                        url: PATH_API_FLAVORS,
                        total: flavors.length
                    },
                    data: flavors
                }
                res.json(response);
            })
            .catch(function () {
                res.json({ status: 400 });
            })
    },

    show: async (req, res) => {
        await db.Flavor.findByPk(req.params.id, {
            attributes: ["id", 'flavorCategoryId', 'name', 'description', 'photo', 'status']
        })
        .then((flavor) =>{
            flavor.photo = `${PATH_URL_PHOTO_PRODUCTS}${flavor.photo}`;
            res.json(flavor);
        })
        .catch(function () {
            res.json({ status: 400 });
        })
    },
    
    latestFlavor: async (req, res) => {
        await db.Flavor.findAll({
            attributes: ["id", 'flavorCategoryId', 'name', 'description', 'photo', 'status','createdAt', 'updatedAt'],
            order: [
                ["createdAt", "DESC"]
            ],
            limit: 1
        }).then((flavor) => {
            flavor[0].photo = `${PATH_URL_PHOTO_PRODUCTS}${flavor[0].photo}`; 
            res.json({status: 200, data: flavor[0]})
        }).catch(function () {
            res.json({ status: 400 });
        }) 
    }

}

