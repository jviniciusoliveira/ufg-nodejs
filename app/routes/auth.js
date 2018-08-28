module.exports = function(app) {

    app.post('/auth', function(req, res) {
        if(req.body.user == 'admin' && req.body.pass == 123) {
            res.redirect('/gerenciar');
        } else {
            res.render('paginas/login');
        }
    })
}