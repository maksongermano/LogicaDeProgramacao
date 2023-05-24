function solucao(min, km) {

    let custoPorMinuto = 0
    if (min > 20) {

        custoPorMinuto = (20 * 50) + (min - 20) * 30
    } else {
        custoPorMinuto = min * 50
    }

    let calculoDeCustokm = 0
    if (km > 10) {
        calculoDeCustokm = (10 * 70) + (km - 10) * 50
    } else {
        calculoDeCustokm = km * 70
    }
    console.log(custoPorMinuto + calculoDeCustokm)

}
solucao(30, 20)