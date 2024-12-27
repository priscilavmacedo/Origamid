var videoGames = ['switch','ps4', 'xox' ];
videoGames[0]

var ultimoItem = videoGames.pop()

for (var numero = 0; numero < 10; numero ++){
  console.log(numero);
  
}

var i = 0
while (i <= 10){
  console.log(i);
  
  i = i + 5;
}

var videoGames = ['switch','ps4', 'xbo','3ds']
for (var item = 0; item < 4; item ++){ 
for(var item = 0; item < videoGames.length; item++)
  console.log(videoGames.length);
  
}

videoGames[0]
console.log(videoGames[0]);
console.log([item]);
console.log(videoGames);


//FOREACH

var videoGames = ['switch','ps4', 'xbo','3ds']

for (var item = 0; item < videoGames.length; item ++){ 
  console.log( videoGames[item]);

 if(videoGames[item]==='ps4'){

 }
}

videoGames.forEach(function(){
  console.log('oi');
 // o foreach percorre cada item entao ele achou 4 item pq percorreu 4 x
  

});

videoGames.forEach(function(item){
  console.log(item);
 // o foreach percorre cada item entao ele achou 4 item pq percorreu 4 x
  

});


videoGames.forEach(function(item, index, array){
  console.log(item, index, array);
 // o foreach percorre cada item entao ele achou 4 item pq percorreu 4 x
  

});


var numero = 0;
var maximo = 15;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = [1959,1962,1970,1994,2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0 ; i <brasilCampeao.length; i++){
  console.log(`o brasil ganhou a copa de  ${ brasilCampeao[i] }`);
  
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0 ; i < frutas.length; i++){
  console.log(frutas[i]);

  if(frutas[i] === 'Pera'){
    break;
  }

}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var ultimaFruta = frutas[4]
console.log(ultimaFruta);
console.log(frutas);

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta);


var ultimaFruta = [frutas.length - 1]
console.log(ultimaFruta);

