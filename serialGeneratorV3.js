'use strict';
console.log('Criando o serialGeneratorV3.js');

const SerialGenerator = function () {

	const max = 10000;

	this.generate = function () {
		return Math.floor(Math.random() * max) ;
	};

};

// module.exports = new SerialGenerator(); // exporta a instância ou
module.exports = SerialGenerator;
