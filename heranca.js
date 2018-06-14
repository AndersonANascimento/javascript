var homem = {
	sexo: "masculino"
};

var joao = {
	nome: "João",
	idade: 20,
	sexo: "feminino"
};

Object.setPrototypeOf(joao, homem);
delete joao.sexo;

console.log(joao);
console.log(joao.sexo);
console.log(Object.keys(joao));

for (var prop in joao) {
	//if (!joao.hasOwnProperty(prop)) continue;
	console.log(prop);
}
/*
var pedro = Object.create(homem);
pedro.nome = "Pedro";
pedro.idade = 18;

console.log(pedro);
console.log(pedro.sexo);
*/
