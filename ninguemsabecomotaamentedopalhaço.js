let aleatorio = (Math.floor(Math.random(1) * 100));

let pessoa = (Math.floor(Math.random(1) * 100));

let tentativa = 0;

while( aleatorio != pessoa ){
    pessoa = Math.floor(Math.random(1) * 100);
    if (pessoa > aleatorio){
    console.log("Tente novamente, o numero secreto é menor", pessoa);
} else if (pessoa < aleatorio) {
    console.log("Tente novamente, o numero secreto é maior", pessoa); 
} else {
        console.log("Parabéns, você acertou o numero secreto" + aleatorio)
 }
tentativa++
}
    console.log ("você tentou", tentativa, "vezes");