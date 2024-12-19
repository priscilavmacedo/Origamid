// function areaQuadrado(){
//   console.log('funcao ativa');
// }

// areaQuadrado()


// function areaQuadrado(lado){
//   return lado * 10 /2
// }

// console.log(areaQuadrado(10))



// function pi(){
//   return 3,14

// }

// var total = 5 * pi()
// console.log(pi());

// function imc(peso, altura){

//   var imc = peso / (altura * altura);
//   return imc
// }

// console.log(imc(80,1.8));





// function terceiraIdade (idade){
//   if(typeof idade !== 'number'){
//     return 'informe a sua idade'
//   }else if (idade >=60 ){
//     return true
//   }else{
//     return false
//   }
// }

// function terceiraIdade (idade){
//   if(idade>=60){
//     console.log('é idoso');
    
//   }
//   console.log(idade);
  

// }

// terceiraIdade(60)

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  return ` falta visitar ${totalPaises - paisesVisitados} paises`
}

console.log(totalPaises);

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}


console.log(dados());
console.log(outrosDados);


dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
