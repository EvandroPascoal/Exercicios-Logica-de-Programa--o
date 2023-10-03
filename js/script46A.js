function ex46A() {

    alert("Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")

    let numero = parseInt(prompt("Digite um numero para saber a tabuada"))
    valor = 1
    while (valor <= 10) {
        let resultado = valor * numero
        alert(`${valor} x ${numero} = ${resultado}`)
        valor++
    }

}