const db = require('../../database/models/index');
const ENDPOINT = "endpoint";
const PATH_API_USERS = "/api/users/";

module.exports = {

    index: async (req, res) => {
        await db.User.findAll({
            attributes: ["id", 'firstName', 'lastName', "email", "avatar"]
            }).then(function (users) {
                for (let i = 0; i < users.length; i++) {
                    users[i].setDataValue(ENDPOINT, `${PATH_API_USERS}${users[i].id}`)
                }

                let response = {
                    meta: {
                        status: 200,
                        url: PATH_API_USERS,
                        total: users.length
                    },
                    data: users
                }
                res.json(response);
            })
            .catch(function () {
                res.json({ status: 400 });
            })
    }

}

