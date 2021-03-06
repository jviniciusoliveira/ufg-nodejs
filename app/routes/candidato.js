module.exports = function (app) {
    
    var candidatoController = app.controllers.CandidatoController;

    app.get('/cadastrar', candidatoController.formularioCadastro);
    app.post('/candidato/save', candidatoController.save);
    app.get('/gerenciar', candidatoController.gerenciar);
    app.get('/editar/:id', candidatoController.formularioEditar);
    app.post('/candidato/edit', candidatoController.edit);
    app.post('/candidato/excluir', candidatoController.delete);
}