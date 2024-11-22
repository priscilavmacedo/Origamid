// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade  = 28
var idadePrimo  = 28

if(minhaIdade > idadePrimo) {
  console.log('é maior');
}else if ( minhaIdade=== idadePrimo){
  console.log('e igual');
}else{
  console.log('é menor');
  
}

// Qual valor é retornado na seguinte expressão?
// && sempre retorna o ultimo valor vaerdaeiro
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);



// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade,!!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('brasil tem mais habitantes');
}else{
  console.log('brasil tem menos habitante');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// o || sempre procura os verdadeiros 
 