/* Teste serialGeneratorV1.js */
var serialGenerator = require('./serialGeneratorV1');
console.log(serialGenerator);
console.log(serialGenerator.generate());

/* Teste serialGeneratorV2.js */
var serialGenerator2 = require('./serialGeneratorV2');
console.log(serialGenerator2);
console.log(serialGenerator2.generate());

/* Teste do cache do require */
var serialGeneratorA = require('./serialGeneratorV2');
var serialGeneratorB = require('./serialGeneratorV2');
console.log(serialGeneratorA === serialGeneratorB);

var createSerialGenerator = require('./serialGeneratorV3');
var serialGeneratorA = new createSerialGenerator();
var serialGeneratorB = new createSerialGenerator();
console.log(serialGeneratorA === serialGeneratorB);
//console.log(serialGenerator.generate());
