/**
 * Created by P000994 on 04/04/2017.
 * Funções Fábrica vs. Funções Construtoras
 */
// Funções Fábrica:
var criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

var f1 = criarPessoa('Pedro', 20);
var f2 = criarPessoa('Maria', 30)
console.log(f1);
console.log(f2);
console.log(typeof f2);

// Função Construtora:
var Pessoa = function(nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

var c1 = new Pessoa('Chico', 20);
var c2 = new Pessoa('Zefa', 30);
console.log(c1);
console.log(c2);
console.log(typeof c2);

// ou

var pedro = {};
Pessoa.call(pedro, 'Chagas', 20);
console.log(pedro);
var maria = {};
Pessoa.call(maria, 'Bilu bilu', 30);
console.log(maria);
console.log(typeof maria);