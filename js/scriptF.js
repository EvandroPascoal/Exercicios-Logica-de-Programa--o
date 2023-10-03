function exF (){

// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
// forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
// variável A. Apresentar os valores trocados.

alert ("Este programa le dois valores (A e B) e efetua a troca dos valores")
let a = parseInt (prompt("Digite o valor de A: "))
let b = parseInt (prompt("Digite o valor de B: "))
let c = a
a = b
b = c
alert ("Este é o valor de A: "+a+" Este é o valor de b: "+b)

}