var carros = [
    {marca: 'Ford', modelo: 'Ka', preco: 28800},
    {marca: 'Chevrolet', modelo: 'Corsa', preco: 34750},
    {marca: 'Ford', modelo: 'Fiesta', preco: 30000},
    {marca: 'Fiat', modelo: 'Palio', preco: 32000},
];

console.log('*** Listagem de carros[] ***');
carros.forEach(function (elem) {
    console.log(elem);
});
console.log('*** Listagem de carros[] FIM ***\n');

var carrosFord = carros.filter(function (elem) {
    return elem.marca === "Ford";
});

var todosFord = carros.every(function (elem) {
    return elem.marca === "Ford";
});

var algumFord = carros.some(function (elem) {
    return elem.marca === "Ford";
});

var modelos = carros.map(function (elem) {
    return elem.modelo;
});
var lenModelo = carros.map(function (elem) {
    return elem.modelo.length;
});

var precoTotal = carros.reduce(function (prev, cur) {
    return prev + cur.preco;
}, 0);

var motos = ['Honda', 'Yamaha'];
var veiculos = modelos.concat(motos);

console.log(carrosFord);
console.log('todosFord: ' + todosFord);
console.log('algumFord: ' + algumFord);
console.log(modelos);
console.log(lenModelo);
console.log('precoTotal: ' + precoTotal);
console.log(veiculos);
console.log(modelos.slice(0, 2));
console.log(modelos.slice(1, 3));
console.log(modelos.slice(2));
console.log(modelos.reverse()); // modifica o array
console.log(modelos.reverse()); // modifica o array

var carrosSortPreco = carros.sort(function (a, b) {
    return a.preco - b.preco; // ascendente
    //return b.preco - a.preco; // descendente
});
console.log(carrosSortPreco);
console.log(modelos.join(';'));
console.log(modelos.join(';').split(';'));

console.log(new Array(10).join('JavaScript'));