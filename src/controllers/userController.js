module.exports = {
    login: function(req, res){
        res.render('views/login');
    },
    register: function(req, res){
        res.render('views/register');
    }
}