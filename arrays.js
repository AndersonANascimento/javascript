var carros = ["Ka", "Corsa", "Palio"];
console.log(carros.valueOf());
console.log(carros);
console.log(carros.toString());
console.log(carros.length);
// Insere elemento no final do array
console.log(carros.push("Gol"));
console.log(carros);
// Remove elemento do final do array
console.log(carros.pop());
console.log(carros);
// Insere elemento no inicio do array
console.log(carros.unshift("Gol"));
console.log(carros);
// Remove elemento do inicio do array
console.log(carros.shift("Gol"));
console.log(carros);
// Localizando indice de um elemento
var pos = carros.indexOf("Corsa");
console.log(pos);
// Removendo elemento de uma posição
console.log(carros.splice(pos, 1));
console.log(carros);
// Adicionando elemento numa posição
console.log(carros.splice(pos, 0, "Sonic"));
console.log(carros);
// Substituindo elemento de uma posição
console.log(carros.splice(pos, 1, "Corsa"));
console.log(carros);

carros.forEach(element => {
    console.log(element);    
});


var carros = [
    {marca: 'Ford', modelo: 'Ka', preco: 28800},
    {marca: 'Chevrolet', modelo: 'Corsa', preco: 34750},
    {marca: 'Ford', modelo: 'Fiesta', preco: 30000},
    {marca: 'Fiat', modelo: 'Palio', preco: 32000},
];

console.log('*** Listagem de carros[] ***');
carros.forEach(elem => {
    console.log(elem);
});
console.log('*** Listagem de carros[] FIM ***\n');
var marcaPesq = "Ford";

var carrosFord = carros.filter(elem => {
    return elem.marca === marcaPesq;
});

var todosFord = carros.every(elem => {
    return elem.marca === marcaPesq;
});

var algumFord = carros.some(elem => {
    return elem.marca === marcaPesq;
});

var modelos = carros.map(elem => {
    return elem.modelo;
});
var lenModelo = carros.map(elem => {
    return elem.modelo.length;
});

var precoTotal = carros.reduce( (prev, cur) => {
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

var carrosSortPreco = carros.sort((a, b) => {
    return a.preco - b.preco; // ascendente
    //return b.preco - a.preco; // descendente
});
console.log(carrosSortPreco);
console.log(modelos.join(';'));
console.log(modelos.join(';').split(';'));

console.log(new Array(10).join('JavaScript'));