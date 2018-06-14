var regExp = new RegExp("abc");	// Objeto
// ou
var regExp = /abc/;	// literal
console.log(regExp);
//Exemplo 1
var regExp = /9999-9999/;	// literal
var telefone = "9999-9999";
console.log(regExp.exec(telefone)); // [ '9999-9999', index: 0, input: '9999-9999' ]
console.log(regExp.test(telefone)); // true

//Exemplo 2
var regExp = /\(48\) 9999-9999/;	// literal
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone)); // true

var regExp = /\(48\) 9999-9999/;	// literal
var telefone = "O telefone é (48) 9999-9999, tratar com João";
console.log(regExp.test(telefone)); // true

//Exemplo 3
var regExp = /^\(48\) 9999-9999$/;	// literal
var telefone = "(48) 9999-9999";
console.log(regExp.test(telefone)); // true

//Exemplo 4 -
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;	// literal
var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone)); // true

//Exemplo 5 - Quantificadores
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;	// literal
var telefone = "(80) 9876-1234";
console.log(regExp.test(telefone)); // true

//Exemplo 6
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;	// literal
var telefone = "(80) 99876-1234";
console.log(regExp.test(telefone)); // true

//Exemplo 7
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;	// literal
var telefone = "(80) 998761234";
console.log(regExp.test(telefone)); // true

//Exemplo 8
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;	// literal
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
//var telefone = "<table><tr></tr></table>";
//var telefone = "<table><tr><td>(80) 999778899</td></tr></table>";
console.log(regExp.test(telefone)); // true

//Exemplo 9 - Utilizando Metacaracter
var regExp = /^\(\d{2}\)\s\d{4,5}-?\d{4}$/;	// literal
var telefone = "(80) 998761234";
console.log(regExp.test(telefone)); // true

//Exemplo 10
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;	// literal
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp)); // true

//Exemplo 11 - Modificadores (i, g, m)
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;	// literal
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.match(regExp)); // true

//Exemplo 12
var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;	// literal
var telefone = "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(telefone.replace(regExp, "telefone")); // true