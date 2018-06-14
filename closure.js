/**
 * Created by P000994 on 04/04/2017.
 * Exemplo de closure
 */
var helloWorld = function() {
    var message = 'Hello World!';
    return function() {
        return message;
    };
};

var fnHelloWorld = helloWorld();
console.log(fnHelloWorld());