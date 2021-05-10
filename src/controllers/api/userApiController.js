const db = require('../../database/models/index');
const ENDPOINT = "endpoint";
const PATH_API_USERS = "/api/users/";
const PATH_URL_AVATAR = "/uploads/avatars/";

module.exports = {

    index: async (req, res) => {
        await db.User.findAll({
            attributes: ["id", 'firstName', 'lastName', "email", "avatar"]
            }).then(function (users) {
                for (let i = 0; i < users.length; i++) {
                    users[i].setDataValue(ENDPOINT, `${PATH_API_USERS}${users[i].id}`),
                    users[i].avatar = `${PATH_URL_AVATAR}${users[i].avatar}`
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
    },


    show:  async (req, res) => {
        await db.User.findByPk(req.params.id, {
            attributes: ["id", 'firstName', 'lastName', "email", "avatar"] 
        })
        .then((user) =>{
            user.avatar = `${PATH_URL_AVATAR}${user.avatar}`; 
            res.json(user);
        })
        .catch(function () {
            res.json({ status: 400 });
        })
    },

    latestUser: async (req, res) => {
        await db.User.findAll({
            attributes: ["id", 'firstName', 'lastName', "email", "avatar", "createdAt", "updatedAt"],
            order: [
                ["createdAt", "DESC"]
            ],
            limit: 1
        }).then((user) => {
            user[0].avatar = PATH_URL_AVATAR + user[0].avatar; 
            res.json({status: 200, data: user[0]})
        }).catch(function () {
            res.json({ status: 400 });
        }) 
    }

}

