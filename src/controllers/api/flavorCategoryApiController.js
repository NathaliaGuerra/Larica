const db = require('../../database/models/index');
const ENDPOINT = "endpoint";
const PATH_API_FLAVORCATEGORY = "/api/flavorCategories/";
const PATH_URL_PHOTO_PRODUCTS = "/uploads/products/";

module.exports = {

    index: async (req, res) => {
        await db.FlavorCategory.findAll({
            attributes: ["id", 'name', 'photo', "status"]
            }).then(async function (flavorCategories) {

                let flavors = await db.Flavor.findAll();

                for (let i = 0; i < flavorCategories.length; i++) {
                    flavorCategories[i].setDataValue(ENDPOINT, `${PATH_API_FLAVORCATEGORY}${flavorCategories[i].id}`);
                    flavorCategories[i].photo = `${PATH_URL_PHOTO_PRODUCTS}${flavorCategories[i].photo}`;

                    let countByCategory = 0;

                    for (let j = 0; j < flavors.length; j++) {
                        if (flavorCategories[i].id == flavors[j].flavorCategoryId){
                            countByCategory = countByCategory + 1;
                        }
                    }
                    flavorCategories[i].setDataValue('countByCategory', countByCategory);
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

