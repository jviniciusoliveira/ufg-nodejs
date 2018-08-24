module.exports = function(app) {

    app.post('/login', function(req, res) {
        console.log(req.route.path);
        if(req.body.user == 'admin' && req.body.pass == 123) {
            res.redirect('/gerenciar');
        } else {
            res.send('<h1>Login Inválido</h1>');
        }        
    });
}