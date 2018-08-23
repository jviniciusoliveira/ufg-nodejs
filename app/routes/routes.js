module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/votar', function(req, res) {
        var candidatos = new app.repository.CandidatosDAO().get();
        res.render('votar', {cand : candidatos});
    });

    app.get('/gerenciar', function(req, res) {
        res.render('gerenciar');
    });

    app.get('/add', function(req, res) {
        res.render('form');
    });

    app.post('/candidato/save', function(req, res) {
        var candidato = req.body;
        new app.repository.CandidatosDAO().set(candidato);
        res.redirect('/votar');
    });
}