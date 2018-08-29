module.exports = function (app) {

    var VotoController = {

        listaCandidatos: function(req, res) {
            var candidatos = new app.repository.CandidatosDAO().getAll();
            res.render('paginas/candidatos', {cand : candidatos});
        },

        registraVoto: function(req, res) {
            new app.repository.CandidatosDAO().voto(req.body.candidatoNr);
            res.redirect('/percentual');
        },

        percentual: function(req, res) {
            var percentual = new app.repository.CandidatosDAO().percentual();
            var candidatos = new app.repository.CandidatosDAO().getAll();
            res.render('paginas/percentual', {percent : percentual, cand : candidatos});
        }
    }

    return VotoController;
}