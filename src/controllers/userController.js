const {User}= require('../database/models/index');

module.exports = {
    login: function(req, res){
        res.render('pages/users/login');
    },
    register: function(req, res){
        res.render('pages/users/register');
    },
    registerStore: async function(req, res){
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
    }
}