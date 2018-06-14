var Homem = function (nome, idade) { this.nome = nome; this.idade = idade;  };

Homem.prototype.sexo = "masculino";

var joao = new Homem("João", 20);
console.log(joao.sexo);

var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.call(pedro, "Pedro", 18);
console.log(pedro.sexo);

var carlos = {};
Homem.apply(carlos, ["Carlos", 30]);
console.log(carlos);

Homem.prototype.sexo = "feminino";
console.log(joao.sexo);
console.log(pedro.sexo);

// ******************
var _new = function (f) {
	var obj = {};
	Object.setPrototypeOf(obj, f.prototype);
	f.apply(obj, Array.prototype.slice.call(arguments, 1));
	return obj; 
};

var luis = _new (Homem, "Luis", 40);
console.log(luis);
console.log(luis.sexo);