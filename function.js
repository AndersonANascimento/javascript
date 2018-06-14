console.log(subtrai(2, 2));
// Function Declaration: a função é carregada antes do código ser interpretado
function subtrai(a, b) {
	return a - b;
}
console.log(subtrai);


// Function Expression: a função é carregada durante a interpretação do código
var soma = function(a, b) {
	 return a + b; 
};

console.log(soma);
console.log(soma(2, 2));

/**
 * Invocando funções de escopo Global
 */
// Definindo Objeto de forma inline
var produto = {nome: 'Sapato', preco: 150};

// Duas funções distintas de calculo de imposto
var formulaImpostoA = function(preco) { return preco * 0.1; };
var formulaImpostoB = function(preco) { return preco * 0.2; };

// Passando uma função como parâmetro
var calcularPreco = function (produto, formulaImposto) {
	return produto.preco + formulaImposto(produto.preco);
};

console.log(calcularPreco(produto, formulaImpostoA));
console.log(calcularPreco(produto, formulaImpostoB));

// Retornando uma função
var helloWorld = function () {
	return function () {
		return "Hello World!";
	};
};

console.log(helloWorld);
console.log(helloWorld());
console.log(helloWorld()());

/**
 * Invocando funções por meio de Objetos
 */
/* 
var pessoa = {
	nome: "João",
	idade: 20,
	getIdade: function () {
		 return this.idade; 
	}
};

console.log(pessoa);
console.log(pessoa.getIdade);
console.log(pessoa.getIdade());
*/
// Externalizando a função getIdade
var getIdade = function (extra) {
	console.log(arguments);
	return this.idade + extra; 
};

var pessoa = {
	nome: "João",
	idade: 20,
	getIdade: getIdade
};

console.log(pessoa);
console.log(pessoa.getIdade);
console.log(pessoa.getIdade(0));
console.log(getIdade(0)); // undefined 

/**
 * Invocando funções por meio de Call e Aply
 */
console.log(getIdade.call(pessoa, 2, 1, 3));
console.log(getIdade.apply(pessoa, [2, 1, 3]));
/**
 * Invocando funções por meio do operador new
 */
// Função Fabrica
var criarPessoa = function (nome, idade) {
	 return  {
	 	nome: nome,
	 	idade: idade
	 } ;
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Maria", 30));

// Função Construtora
var Pessoa = function (nome, idade) {
	 this.nome = nome;
	 this.idade = idade; 
};

console.log(new Pessoa("Pedro", 20));
console.log(new Pessoa("Maria", 30));

var pedro = {};
Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "Maria", 30);
console.log(maria);

/**
 * Closure
 */
var helloWorld = function () {
	var message = "Hello World!";
	return function () {
		return message; // mantem a referencia da variavel externa
	};
};

var fnHelloWorld = helloWorld();
console.log(fnHelloWorld());