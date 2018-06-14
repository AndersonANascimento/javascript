/* Aula 24 - Objeto Boolean */
// tipo primitivo
var b = true;
console.log(b);
console.log(typeof(b));

// tipo Object
var b = new Boolean(true);
console.log(b);
console.log(typeof(b));
console.log(b instanceof Boolean);

var b = new Boolean();
console.log(b); // Valor default FALSE

var b = new Boolean(1);
console.log(b); // Valor 0->FALSE / 1->TRUE

var b = new Boolean("qualquer coisa");
// var b = new Boolean("");
console.log(b); // Valor ""->FALSE / "qualquer coisa"->TRUE

/* Aula 25 - Objeto Number */
// tipo primitivo
var n = 120.35;
console.log(n);
console.log(typeof(n));

// tipo Object
var n = new Number(120.35);
console.log(n);
console.log(typeof(n));

var n = new Number("120.35"); // passando string
console.log(n);
console.log(typeof(n));

// Propriedades Estáticas
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
// Funções estáticas
console.log(Number(120.35123).toFixed());   // 120
console.log(Number(120.35123).toFixed(2));   // 120.35
console.log(Number(120.35123).toPrecision());   // 120.35123
console.log(Number(120.35123).toPrecision(1));   // 1e+2
console.log(Number(120.35123).toPrecision(2));   // 1.2e+2
console.log(Number(120.35123).toPrecision(3));   // 120
console.log(Number(120.35123).toPrecision(4));   // 120.4
console.log(Number(120.35123).toPrecision(5));   // 120.35
console.log(Number(120.35123).toExponential());
console.log(Number(120.35123).toExponential(3));

/* Aula 26 - Objeto String */
// tipo primitivo
var text = "Texto entre aspas";
console.log(text);
// tipo Object
var text = String("Texto entre aspas");
console.log(text);

console.log(text.length);
console.log(text.charAt(3));
console.log(text.concat(' Anderson'));