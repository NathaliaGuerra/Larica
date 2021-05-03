const db = require('../../database/models/index');
const ENDPOINT = "endpoint";
const PATH_API_FLAVORCATEGORY = "/api/flavorCategories/";
const PATH_URL_PHOTO_PRODUCTS = "/uploads/products/";

module.exports = {

    index: async (req, res) => {
        await db.FlavorCategory.findAll({
            attributes: ["id", 'name', 'photo', "status"]
            }).then(async function (flavorCategories) {
                for (let i = 0; i < flavorCategories.length; i++) {

                    let flavors = await db.Flavor.findAll({
                        where: {
                            flavorCategoryId : flavorCategories[i].id
                        }
                    });
                    console.log(flavors)

                    flavorCategories[i].setDataValue(ENDPOINT, `${PATH_API_FLAVORCATEGORY}${flavorCategories[i].id}`),
                    flavorCategories[i].photo = `${PATH_URL_PHOTO_PRODUCTS}${flavorCategories[i].photo}`,
                    flavorCategories[i].setDataValue('countByCategory', flavors.length)
                }

                let response = {
                    meta: {
                        status: 200,
                        url: PATH_API_FLAVORCATEGORY,
                        total: flavorCategories.length
                    },
                    data: flavorCategories
                }
                res.json(response);
            })
            .catch(function () {
                res.json({ status: 400 });
            })
    }

}

