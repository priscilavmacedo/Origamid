var possuiGraduação = true

if(possuiGraduação){
  console.log('é verdadeiro');
}else {
  console.log('é falso');
}


var nome = '10kg' + 10 ;

if(nome){
  console.log(nome);
}else {
  console.log('nome nao existe');
  
}



var x = 10
console.log(x == 10);

var x = '10'
// se for string é falso
console.log(x === 10);




var x = 'Gato'
console.log(x !==  'Gato');


var corFavorita = 'vermelho'

switch (corFavorita){
case 'azul':
  console.log('olhe para o ceu');
  break;
  default:
    console.log('feche os olhos');
    
  
}