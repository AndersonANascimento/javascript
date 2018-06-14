'use strict';
console.log('módulo em ./serialGeneratorV2.js exec....');
let createSerialGenerator = function () {

	let max = 10000;

	let generate = function () {
		return Math.floor(Math.random() * max) ;
	};

	return {
		generate: generate
	};
};

module.exports = createSerialGenerator(); // exporta a instância
// module.exports = createSerialGenerator;	// exporta a função
