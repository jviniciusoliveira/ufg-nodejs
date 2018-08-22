module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/votar', function(req, res) {
        var candidatos = app.repository.candidatosDB();
        res.render('votar', {cand : candidatos});
    });

    app.get('/gerenciar', function(req, res) {
        res.render('gerenciar');
    });
}