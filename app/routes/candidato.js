module.exports = function (app) {
    
    var candidatoController = app.controllers.CandidatoController;

    app.get('/cadastrar', candidatoController.formularioCadastro);
    app.post('/candidato/save', candidatoController.save);

    app.get('/gerenciar', function (req, res) {
        var candidatos = new app.repository.CandidatosDAO().get();
        res.render('paginas/gerenciar', {cand : candidatos});
    });
}