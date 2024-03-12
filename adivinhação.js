let numeroaleatorio = (Math.floor(Math.random(1) * 100));

let pessoa = (Math.floor(Math.random(1) * 100));


let tentativa = 9;

while( numeroaleatorio != pessoa ){
    pessoa = Math.floor(Math.random(1) * 100);
    if (pessoa > numeroaleatorio){
    console.log("Tente novamente, o numero secreto é menor", pessoa);
} else if (pessoa < numeroaleatorio) {
    console.log("Tente novamente, o numero secreto é maior", pessoa); 
} else {
        console.log("Parabéns, você acertou o numero secreto" + numeroaleatorio)
 }
tentativa++
}
    console.log ("você tentou", tentativa, "vezes");
