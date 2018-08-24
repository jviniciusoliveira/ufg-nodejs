module.exports = function (app) {  

    var votoController = app.controllers.VotoController;

    app.get('/votar', votoController.listaCandidatos);
    app.post('/registra-voto', votoController.registraVoto);
    app.get('/percentual', votoController.percentual);
}