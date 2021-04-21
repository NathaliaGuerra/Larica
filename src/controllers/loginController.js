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

        let userAuthenticated = {};
        if(user) {
            userAuthenticated = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                avatar: user.avatar,
                role: user.role
            };
        }

        req.session.userAuthenticated = userAuthenticated; 
        
        if(req.body.rememberme != undefined) {
            
            res.cookie('rememberme', 
            userAuthenticated.id, {
                maxAge: 80000
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

                res.cookie('rememberme', 
                null, {
                    maxAge: 1
                });

                console.log("Session Destroyed");
                res.redirect('/login');
            }
        });
    }
}