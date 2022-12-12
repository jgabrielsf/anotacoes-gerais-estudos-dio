/* Exercício 1

let nota1 = 7
let nota2 = 7
let nota3 = 8
let media = 0

media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovação');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de semestre')
}

Exercício 2

let imc = 0;
let peso = 70;
let altura = 1.55;

imc = peso / (altura * altura);
console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal');
} else if (imc > 25 && imc <= 30) {
    console.log('Acima do Peso');
} else if (imc > 30 && imc <= 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}

Exercício 3

const valorEtiqueta = 100;
const modoPagamento = 4;

if (modoPagamento === 1) {
    console.log(valorEtiqueta - (valorEtiqueta * (10/100)));
} else if (modoPagamento === 2) {
    console.log(valorEtiqueta - (valorEtiqueta * (15/100)));
} else if (modoPagamento === 3) {
    console.log(valorEtiqueta);
} else {
    console.log(valorEtiqueta + (valorEtiqueta * (10/100)));
}
*/