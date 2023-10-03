function ex46I() {
    alert("Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.")


    let numero = 1
    let soma = 0
    let media = 0
    let contadora = 1
    let A

    while (numero < 11) {
        A = parseInt(prompt(contadora + ": Digite um numero: "))
        soma = A + soma
        numero++
        contadora++
    }
    media = soma / 10
    alert(`O somatório total desses valores é: ${soma}`)
    alert(`A média aritmética desses valores é: ${media}`)

}