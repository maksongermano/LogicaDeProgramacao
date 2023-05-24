const texto = "Este é um texto de exemplo.";

const textoFormatado = texto.split(" ");


const contadorDeTexto = (texto) => {


    // Seu codigo aqui
    const textoFormatado = texto.trim().split(" ");
    let contador = 0
    for (let palavra of textoFormatado) {
        if (palavra) { contador++ }
    }
    console.log(contador)
}

contadorDeTexto(textoFormatado);
