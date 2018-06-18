var criarHomem = function (nome, idade) { return { nome: nome, idade: idade }; };
var Homem = function (nome, idade) { this.nome = nome; this.idade = idade; this.sexo = "masculino" };

console.log("\n*** Criando objeto com new");
var joao = new Homem("João", 20);
console.log(joao);
console.log(joao.sexo);

console.log("\n*** Criando objeto com call/apply");
var pedro = {};
Homem.call(pedro, "Pedro", 18);
console.log(pedro);
console.log(pedro.sexo);
var carlos = {};
Homem.apply(carlos, ["Carlos", 30]);
console.log(carlos);
console.log(carlos.sexo);

console.log("\n*** Criando objeto com prototype");
var Homem = function (nome, idade) { this.nome = nome; this.idade = idade; };
Homem.prototype.sexo = "masculino";

var joao = new Homem("João", 20);
console.log(joao);
console.log(joao.sexo);

var pedro = {};
pedro.__proto__ = Homem.prototype; // já realizada pelo operador 'new'
Homem.call(pedro, "Pedro", 18);
console.log(pedro);
console.log(pedro.sexo);

// * Simulando o operador "new"
console.log("\n*** Simulando operador 'new'");
var _new = function (f) {
	var obj = {};
	Object.setPrototypeOf(obj, f.prototype);
	f.apply(obj, Array.prototype.slice.call(arguments, 1));
	return obj; 
};

var luis = _new (Homem, "Luis", 40);
console.log(luis);
console.log(luis.sexo);