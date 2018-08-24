module.exports = function (app) {

    var CandidatoController = {

        formularioCadastro: function(req, res) {
            res.render('paginas/formCadastro');
        },

        save: function(req, res) {
            var candidato = req.body;
            candidato.votos = 0;
            new app.repository.CandidatosDAO().set(candidato);
            res.redirect('/gerenciar');
        },

        gerenciar: function(req, res) {
            if(req.body.user == 'admin' && req.body.pass == 123) {
                var candidatos = new app.repository.CandidatosDAO().get();
                res.render('paginas/gerenciar', {cand : candidatos});
            } else {
                res.render('paginas/login');
            }
        },
    }
    return CandidatoController;
}