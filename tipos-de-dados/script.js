console.log('oi');

var nome = 'andre'
var idade  = 23

console.log(typeof idade);
console.log(typeof nome);

var simbolo = Symbol();
console.log( typeof simbolo);

var nome = 'andrea'
var sobrenome = 'sandes'

var nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto);

var gols = 1000;
// var frase2 = 'romario fez '  + gols +  ' gols';

// console.log(frase2);


var frase2 = `romario fez ${gols *2} gols`;
console.log(frase2);
