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


function getAll() {

    return candidatos;
}

module.exports = function () {
    return getAll;
};