function CandidatosDAO() {}

var candidatos = 
[
    {
        nome : 'Candidato 1', 
        partido : 'PPP',
        numero : 25
    }, 
    {
        nome: 'nome2', 
        partido : 'PPS',
        numero : 28
    }
];

CandidatosDAO.prototype.get = function() {
    return candidatos;
}

CandidatosDAO.prototype.set = function(candidato) {
    candidatos.push(candidato);
} 

module.exports = function () {
    return CandidatosDAO;
};