function ex66I() {

    alert ("Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo  valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc")

let atual = 1
let anterior = 0
let fibonacci = 1
alert (fibonacci)

for (let valor = 1; valor < 15; valor++) {
    fibonacci = atual + anterior
    anterior = atual
    atual = fibonacci

    alert (fibonacci)

    
}


}









// alert("Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.")

// let soma = 0

// for (let numero = 1; numero < 11; numero++) {
//     let valor = parseInt(prompt(numero + ": Digite um numero: "))
//     soma = valor + soma
// }
// let media = soma / 10
// alert(`O resultado da somatória desses valores lidos é de: ${soma} \nO resultado da média aritmética desses valores lidos é: ${media}`)

