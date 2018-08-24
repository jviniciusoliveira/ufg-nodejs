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
        }
    }
    return CandidatoController;
}