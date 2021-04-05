module.exports = {
    login: function(req, res){
        res.render('pages/users/login');
    },
    register: function(req, res){
        res.render('pages/users/register');
    }
}