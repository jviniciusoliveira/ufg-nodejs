function CandidatosDAO() {}

var candidatos = 
[
    { nome: 'Candidato 1', partido : 'PPP', numero : 11, votos : 0 }, 
    { nome: 'Candidato 2', partido : 'PPS', numero : 22, votos : 0 },
    { nome: 'Candidato 3', partido : 'PPX', numero : 33, votos : 0 },
    { nome: 'Candidato 4', partido : 'PPJ', numero : 44, votos : 0 }, 
    { nome: 'Candidato 5', partido : 'PPT', numero : 55, votos : 0 },
    { nome: 'Candidato 6', partido : 'PPA', numero : 66, votos : 0 }
];

CandidatosDAO.prototype.getAll = function() {
    return candidatos;
}

CandidatosDAO.prototype.get = function(candidatoNr) {
    let index = candidatos.findIndex(val => val.numero == candidatoNr);
    return candidatos[index];
}

CandidatosDAO.prototype.set = function(candidato) {
    if(!jaExiste(candidato.numero)) {
        candidatos.push(candidato);
    } else {
        return false;
    }
}

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

CandidatosDAO.prototype.edit = function(candidato) {
    let index = candidatos.findIndex(val => val.numero == candidato.numero);
    candidatos[index].nome = candidato.nome;
    candidatos[index].partido = candidato.partido;
}

CandidatosDAO.prototype.delete = function(candidatoNr) {
    let index = candidatos.findIndex(val => val.numero == candidatoNr);
    candidatos.splice(index, 1);
}

function jaExiste(candidatoNr) {
    let index = candidatos.findIndex(val => val.numero == candidatoNr);
    if(index < 0) {
        return false;
    }
    return true;
}

module.exports = function () {
    return CandidatosDAO;
};