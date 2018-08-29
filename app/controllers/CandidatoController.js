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
            var candidatos = new app.repository.CandidatosDAO().getAll();
            res.render('paginas/gerenciar', {cand : candidatos});
        },

        formularioEditar: function(req, res) {
            var candidatoNr = req.params.id;
            var candidato = new app.repository.CandidatosDAO().get(candidatoNr);
            res.render('paginas/formEditar', { cand: candidato });
        },

        edit: function(req, res) {
            var candidato = req.body;
            new app.repository.CandidatosDAO().edit(candidato);
            res.redirect('/gerenciar');
        },

        delete: function(req, res) {
            new app.repository.CandidatosDAO().delete(req.body.candidatoNr);
            res.redirect('/gerenciar');
        }
    }
    return CandidatoController;
}