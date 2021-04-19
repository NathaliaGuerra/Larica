const db = require('../database/models/index');

module.exports = {

    login: async (req, res) => {
        res.render('pages/login');
    },

    checkUser: async (req, res) => {
        let user = await db.User.findOne({ 
            where: { 
                email: req.body.email 
            } 
        });
        let userAuthenticated = user;
        req.session.userAuthenticated = userAuthenticated; 
        
        if(req.body.rememberme != undefined) {
            res.cookie('rememberme', 
            userAuthenticated.id, {
                maxAge: 3000000
            })
        }
        return res.redirect('/');
    },

    logout: (req, res) => {
         req.session.destroy((error)=> {
            if(error){
                console.log(error);   
                res.render('/', {error});  
            } else {
                console.log("Session Destroyed");
                res.redirect('/');
            }
        });
    }
}