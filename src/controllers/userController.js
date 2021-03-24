module.exports = {
    login: function(req, res){
        res.render('pages/login');
    },
    register: function(req, res){
        res.render('pages/register');
    }
}