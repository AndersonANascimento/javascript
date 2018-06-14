/**
 * Created by P000994 on 04/04/2017.
 * Desvendando a linguagem JavaScript - #8 - Function - Parte 2 - Rodrigo Branas
 */

// ALERTA! Cuidado com o escopo Global
var counter = 0;
var add = function () {
    return ++counter;
};
console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function (item) {
    itens.push(item);
    return itens;
};
console.log(add('A'));
console.log(add('B'));
console.log(add("C"));

console.log(add());

// Utilizando encapsulamento com Objetos - possui fragilidades
// permite acessar diretamente 'value' podendo introduzir problemas
var counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};
console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add("C"));
console.log(counter.add());

counter.value = undefined; // acesso indevido ao conteudo do objeto
console.log(counter.add());

// Reescrevendo com Factory Function
var createCounter = function () {
    var value = 0;
    return {
        add: function () {
            return ++value;
        }
    };
};
// ou com Constructor Function
var Counter = function () {
    var value = 0;
    this.add = function () {
        return ++value;
    };
};
// ou com IIFE - Immediately-Invoked Function Expression (Module Pattern)
var counter = (function () {
    var _value = 0;
    var _add = function () {
        return ++_value;
    };
    var _reset = function () {
        _value = 0;
    };
    return {
        add: _add,
        reset: _reset
    };
})();

var counter1 = createCounter();
var counter2 = new Counter();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());

console.log(counter1.value);
console.log(counter1.add());

console.log(counter2.value);
console.log(counter2.add());
