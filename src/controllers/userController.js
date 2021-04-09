const {User}= require('../database/models/index');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = {
    login: function(req, res){
        res.render('pages/users/login');
    },
    

    userCheck: async function(req, res){
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                return res.redirect('/');
            } else {
                return res.send('invalid password');
            }
        }
        return res.send('email does not exist');

    },


    register: function(req, res){
        res.render('pages/users/register');
    },
    registerStore: async function(req, res){
        let errorRegister = validationResult(req);
       if(errorRegister.isEmpty()){
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            avatar: 'http://',
            roleId: 2
        }).then(()=>{
            res.redirect('/login');
        }).catch((error)=>{
            console.log(error.message);
        })
       }else{
        res.render('pages/users/login', {errorRegister: errorRegister.mapped()});
       }
    }
}