module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/votar', function(req, res) {
        res.render('votar');
    });

    app.get('/gerenciar', function(req, res) {
        res.render('gerenciar');
    });
}