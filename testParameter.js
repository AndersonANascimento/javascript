'use strict';

function getDados(fileName) {	
	const fs = require('fs'),
		path = require('path'),
		util = require('util');
	let dados;

	if (fileName.split('.').pop() == 'json')
		dados = JSON.parse(fs.readFileSync(path.join(__dirname, fileName), 'utf8'));
	else
		dados = fs.readFileSync(path.join(__dirname, fileName), 'utf8').toString();
		// .replace(/[\r\n\t]/g, '');

	return dados;
}

const dados = getDados("dados.txt");
const estrutura = getDados("cfppaps1.json");
// console.log(estrutura);
// process.exit(0);
	
const Parameter = require('./Parameter');
const parameter = new Parameter(dados, estrutura);

// console.log(parameter);
// console.log(parameter.dados);
// console.log(parameter.estrutura);
console.log(JSON.stringify(parameter.parseJson()));
