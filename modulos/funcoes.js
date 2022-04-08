//FUNÇÃO CALCULAR IDADE E IMC

let g = new Date();

module.exports.calcularIdade = function (anoNasc) {
    return g.getFullYear() - anoNasc;
}

module.exports.calcularImc = function (peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

