function exI (){

// Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
// segundo.

alert ("Este programa le dois valores inteiros e mostra o resultado do quadrado da diferença do primeiro valor pelo segundo")
let a = parseInt (prompt("Digite o valor de A: "))
let b = parseInt (prompt("Digite o valor de B: "))

a = a*a
b = b*b
let resultado = a - b

alert ("A diferença do quadrado do primeiro valor pelo segundo: "+resultado)


}