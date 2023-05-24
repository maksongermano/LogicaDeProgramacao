//Faça um programa que diga qual é a manilha, dada uma carta virada para cima.

const cartaViradaParaCima = ['Q', 'J', 'K', 'A', '2', '3']
const forca = manilha('K')

function manilha(carta) {
    if (carta === 'Q') {
        console.log('J')
    } else if (carta === 'J') {
        console.log('K')
    } else if (carta === 'K') {
        console.log('A')
    } else if (carta === 'A') {
        console.log('2')
    } else if (carta === '2') {
        console.log('3')
    }
}
