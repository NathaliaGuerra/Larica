const db = require('../../database/models/index');
const ENDPOINT = "endpoint";
const PATH_API_PRODUCTS = "/api/products/";

module.exports = {

    index: async (req, res) => {
        await db.Product.findAll({
            attributes: ["id", 'name', 'description', "category", "price"]
            }).then(function (products) {
                for (let i = 0; i < products.length; i++) {
                    products[i].setDataValue(ENDPOINT, `${PATH_API_PRODUCTS}${products[i].id}`)
                }

                let response = {
                    meta: {
                        status: 200,
                        url: PATH_API_PRODUCTS,
                        total: products.length
                    },
                    data: products
                }
                res.json(response);
            })
            .catch(function () {
                res.json({ status: 400 });
            })
    }

}

