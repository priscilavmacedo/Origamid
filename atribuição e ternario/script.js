var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var numero = 20
numero += 10
console.log(numero);

//TERNARIO

var idade = 20

var podeBeber;
podeBeber = (idade >= 18) ? true : false;

console.log(podeBeber);


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500 
console.log(scroll);


// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);

//se quiser retornar string 
darCredito = (possuiCarro && possuiCasa)? 'dar credito': 'negar credito';
console.log(darCredito);




