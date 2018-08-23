module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('paginas/index');
    });

    app.get('/votar', function(req, res) {
        var candidatos = new app.repository.CandidatosDAO().get();
        res.render('paginas/votar', {cand : candidatos});
    });

    app.get('/gerenciar', function(req, res) {
        var candidatos = new app.repository.CandidatosDAO().get();
        res.render('paginas/gerenciar', {cand : candidatos});
    });

    app.get('/cadastrar', function(req, res) {
        res.render('paginas/formCadastro');
    });

    app.post('/candidato/save', function(req, res) {
        var candidato = req.body;
        candidato.votos = 0;
        new app.repository.CandidatosDAO().set(candidato);
        res.redirect('/gerenciar');
    });

    app.post('/registra-voto', function(req, res) {
        new app.repository.CandidatosDAO().voto(req.body.candidatoNr);
        res.redirect('/percentual');
    });

    app.get('/percentual', function(req, res) {
        var percentual = new app.repository.CandidatosDAO().percentual();
        var candidatos = new app.repository.CandidatosDAO().get();
        res.render('paginas/percentual', {percent : percentual, cand : candidatos});
    });
}