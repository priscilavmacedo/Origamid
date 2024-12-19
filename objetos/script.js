var pessoa = {
  nome: 'amdre',
  idade: 28,
}
console.log(pessoa);

//uma propriedade pode ser uma função

var quadrado = {
  lados:4,
  area:function(lado){
    return lado * lado
  },
  perimetro: function(lado){
    console.log(this.lados)
    return this.lados * lado
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));



Math.PI; // 3.14

Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

console.log(Math.random());

var menu = {
  width:800,
  height: 50,
  backgroundColor:'#84E',
}

menu.backgroundColor = '#000'

menu.color = 'blue'


menu.esconder = function (){
  console.log('Escondi');
  
}

var bg = menu.backgroundColor




