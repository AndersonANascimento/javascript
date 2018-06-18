function imprime() {
	console.log(joao);
	console.log(joao.sexo);
	console.log(pedro);
	console.log(pedro.sexo);
}

var homem = { sexo: "masculino" };

console.log("\n*** Herança com __proto__");
var joao = { nome: "João", idade: 20, __proto__: homem};
var pedro = { nome: "Pedro", idade: 18,	__proto__: homem};
imprime();

console.log("\n*** Herança com Object.setPrototypeOf");
var joao = { nome: "João", idade: 20 };
Object.setPrototypeOf(joao, homem);
var pedro = { nome: "Pedro", idade: 18 };
Object.setPrototypeOf(pedro, homem);
imprime();

console.log("\n*** Herança com Object.create");
var pedro = Object.create(homem);
pedro.nome = "Pedro";
pedro.idade = 18;
console.log(pedro);
console.log(pedro.sexo);


console.log("\n*** Shadowing");
var joao = { nome: "João", idade: 20, sexo: "feminino" };
Object.setPrototypeOf(joao, homem);
imprime();
delete joao.sexo;
imprime();

console.log("\n*** Propriedades do Objeto(todas) ");
console.log(Object.keys(joao));
for (var prop in joao) {
	console.log(prop);
}

console.log("\n*** Propriedades do Objeto(exclusivas de joao)");
console.log(Object.keys(joao));
for (var prop in joao) {
	if (!joao.hasOwnProperty(prop)) continue;
	console.log(prop);
}

return 0;