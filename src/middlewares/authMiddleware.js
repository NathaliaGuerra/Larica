const db = require('../database/models/index');

function authMiddleware(req, res, next) {
    
    if(typeof req.session.userAuthenticated != undefined) {
        res.locals.userAuthenticated = req.session.userAuthenticated;
    
    } else if (typeof req.cookies.rememberme != undefined) {
        db.User.findByPk(req.cookies.rememberme)
            .then((user) => {
                res.locals.userAuthenticated = user,
                res.session.userAuthenticated = user
            });
    }
    
    next();
}

module.exports = authMiddleware;