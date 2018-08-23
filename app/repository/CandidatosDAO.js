function CandidatosDAO() {}

var candidatos = 
[
    { nome : 'Candidato 1', partido : 'PPP', numero : 11, votos : 0 }, 
    { nome: 'Candidato 2', partido : 'PPS', numero : 22, votos : 0 },
    { nome: 'Candidato 3', partido : 'PPX', numero : 33, votos : 0 },
    { nome : 'Candidato 1', partido : 'PPP', numero : 44, votos : 0 }, 
    { nome: 'Candidato 2', partido : 'PPS', numero : 55, votos : 0 },
    { nome: 'Candidato 3', partido : 'PPX', numero : 66, votos : 0 }
];

CandidatosDAO.prototype.get = function() {
    return candidatos;
}

CandidatosDAO.prototype.set = function(candidato) {
    candidatos.push(candidato);
}

// Será necessário implementar validação para não permitir cadastrar candidatos com o mesmo número
CandidatosDAO.prototype.voto = function(candidatoNr) {
    let index = candidatos.findIndex(val => val.numero == candidatoNr);
    candidatos[index].votos = candidatos[index].votos +1;
}

CandidatosDAO.prototype.percentual = function() {
    let percentualCadidatos = [];
    let totalVotos = 0;

    for (var i in candidatos) {
        totalVotos += candidatos[i].votos;
    }

    for (var i in candidatos) {
        let cPercent = 
        {
            numero : candidatos[i].numero,
            percentual : Math.round((candidatos[i].votos * 100 /  totalVotos))
         }
         percentualCadidatos.push(cPercent);
    }
    return percentualCadidatos;
}

module.exports = function () {
    return CandidatosDAO;
};