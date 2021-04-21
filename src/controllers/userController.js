const db = require('../database/models/index');
const bcrypt = require('bcrypt');
const REGISTERED_USER = 'Registered';

module.exports = {

    index: async (req, res) => {
        let users = await db.User.findAll();

        if(req.session.user){
            var userAuth = req.session.user;
            console.log(userAuth);
        }
        
        res.render('pages/users/users', { users, userAuth });
    },

    register: (req, res) => {
        res.render('pages/users/register');
    },

    store: async (req, res) => {
        // let avatar = (req.file != undefined) ? res.session.userAuthenticated.avatar : req.file.filename; 
        await db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password:  bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null),
            avatar: null,
            role: REGISTERED_USER
        }).then(() => {
            res.render('pages/login', { message: 'The user was created! Now you can try login.' });
        }).catch((error) => {
            res.render('pages/users/register', { errors: error.message });
        });
    },

    show: async (req, res) => {
        await db.User.findOne({
            where: { id: req.params.id }
        }).then((user) => {
            if(user) {
                res.render('pages/users/profile', {user: user});
            } else {
                res.render('pages/users', { errors: 'User does not exist' });
            }
        });
    },

    edit: async (req, res) => {
        await db.User.findOne({
            where: { id: req.params.id }
        }).then((user) => {
            if(user) {
                res.render('pages/users/edit', {user});
            } else {
                res.render('pages/users', { error: 'User does not exist' });
            }
        });
    },

    update: async (req, res) => {
     
        // TODO no funciona el update
        await db.User.findOne({
            where: { id: req.params.id }
        }).then(async (user) => {
            if(user) {
                var userDataUpdate = {};
                userDataUpdate.firstName = req.body.firstName ? req.body.firstName : user.firstName;
                userDataUpdate.lastName = req.body.lastName ? req.body.lastName : user.lastName;
                userDataUpdate.email = req.body.email ? req.body.email : user.email;
                if(req.body.password){
                    userDataUpdate.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null);
                }
                userDataUpdate.avatar = (req.file != undefined) ? res.session.userAuthenticated.avatar : req.file.filename; 
                await db.User.update(userDataUpdate, {
                    where: {
                      id: req.params.id
                    }
                  }).then((userUpdated) => {
                      console.log('aquiiiiiiii: ' + userUpdated);
                      res.redirect(req.params.id);
                  }).catch((error) => {
                    console.log(error);
                    res.redirect(req.params.id, { error: 'Data could not be updated, try again' });
                  });
            } else {
                let error = 'User does not exist';
                console.log('else ' + error);
                res.redirect(req.params.id, { error: error });
                
            }
        }).catch((error) => {
            
                console.log('catch final ' + error);
            res.redirect(req.params.id, { error: error });
        });
    },

    destroy: async (req, res) => {
        await db.User.destroy({
            where: {
              id: req.params.id
            }
        }).then(() => {
            res.redirect('/users');
        }).catch((error) => {
            res.render('/users', {error: error});
        });
    }

}