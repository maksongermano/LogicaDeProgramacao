//função que receba três argumentos: numero, limiteInferior, LimiteSuperior
//limiteInferir >=limiteSUPERIOR
//o numero, ele deve ser maior ou igual que o limiteInferior e menor ou igual do que o limiteSuperior.

let arraydeNumeros = [100, 5, 50]
let valorMinimo = 5
let valorMaximo = 20



function verificarNumero(numero, limiteInferior, LimiteSuperior) {
    if (numero >= limiteInferior && numero <= LimiteSuperior) {
        console.log(`o resultado ${numero}, PERTENCE, ao limite delimitado`)

    } else {
        console.log(`Esse ${numero}, NÃO PERTENCE ao limite delimitado`)
    }
}

let resultado = verificarNumero(10, 5, 20)
