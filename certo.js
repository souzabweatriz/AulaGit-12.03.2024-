let x = 20;
let y = 10;

let inicio;
let fim;

if (x < y) {
    inicio = x;
    fim = y;
} else {
    inicio = y;
    fim = x;
}
while (inicio <= fim) {
    console.log(inicio);
    inicio++;
}
