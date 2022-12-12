
function aplicarDescontos(valorEtiqueta, valorDesconto) {
    console.log(valorEtiqueta - (valorEtiqueta * (valorDesconto / 100)));
}

function aplicarJuros(valorEtiqueta, valorJuros) {
    console.log(valorEtiqueta = valorEtiqueta + (valorEtiqueta * (valorJuros / 100)));
}

function valorNormal(valorEtiqueta) {
    console.log(valorEtiqueta);
}

const modoPagamento = 2
const valorEtiqueta = 100

if (modoPagamento === 1) {
    aplicarDescontos(valorEtiqueta, 10);
} else if (modoPagamento === 2) {
    aplicarDescontos(valorEtiqueta, 15);
} else if (modoPagamento === 3) {
    valorNormal(100)   
} else {
    aplicarJuros(valorEtiqueta, 10)
}
