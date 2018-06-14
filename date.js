var hoje = new Date();
console.log(hoje);
console.log(hoje.getTime());

var natal = new Date(1419465600000);
console.log(natal);

console.log(new Date("2016/08/15"));
console.log(Date.parse("2014/12/25"));

console.log(new Date("2014-12-25"));
console.log(new Date("2014-12-25T10:30:00-04:00"));

var natal = new Date(2014, 11, 25, 10, 30, 0);
console.log(natal.getYear());
console.log(natal.getFullYear());
console.log(natal.getMonth());
console.log(natal.getDay());
console.log(natal.getDate());