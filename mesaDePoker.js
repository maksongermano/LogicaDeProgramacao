let min = 2
let max = 10
const valores = [0, 5, 6, 10, 11]
let resultado = []

for (let numero of valores) {
    if (numero >= min && numero <= max) {
        resultado.push(numero)
    }

}
console.log(resultado)
