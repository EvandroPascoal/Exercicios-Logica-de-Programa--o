function exH (){

// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
// VOLUME  COMPRIMENTO * LARGURA * ALTURA.

alert ("Este programa calcula e apresenta o volume de uma caixa retangular.")
let comprimento = parseInt (prompt("Digite o valor do comprimento da caixa retangular: "))
let largura = parseInt (prompt("Digite o valor da largura da caixa retangular: "))
let altura = parseInt (prompt("Digite o valor da altura da caixa retangular: "))

let volume = comprimento * largura * altura

alert ("O valor do volume da caixa retangular: "+volume)


}