/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
- 1 Preço do etanol;
- 2 Preço da gasolina;
- 3 O tipo de combustível que está no seu carro;
- 4 Gasto médio de combustível do carro por KM;
- 5 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoGasolina = 5.79;
const precoEtanol = 2.97;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaEmKm = 100;


let precoLitroAbastecer = 0
let litroAbastacer = 0;


if (tipoCombustivel === 'Etanol') {
    litroAbastacer = distanciaEmKm / kmPorLitros;
    precoLitroAbastecer = litroAbastacer * precoEtanol;
    console.log('O valor gasto será: ', precoLitroAbastecer.toFixed(2), 'reais');
} else {
    litroAbastacer = distanciaEmKm / kmPorLitros;
    precoLitroAbastecer = litroAbastacer * precoGasolina;
    console.log('O valor gasto será: ', precoLitroAbastecer.toFixed(2), 'reais');
}
