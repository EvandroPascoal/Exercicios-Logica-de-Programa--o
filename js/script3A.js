function ex3A (){

// Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e
// D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro
// valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma
// (variável S) do segundo com o quarto valor.

alert ("Apresenta ao final do programa o resultado do produto e a soma")

let a = parseInt(prompt("Digite o valor de A: "))
let b = parseInt(prompt("Digite o valor de C: "))
let c = parseInt(prompt("Digite o valor de B: "))
let d = parseInt(prompt("Digite o valor de D: "))

let p = (a+c)/2
let s = b + d

alert ("O resultado do produto entre "+a+" e "+c+" é de "+p)
alert ("O resultado da soma entre "+b+" e "+d+" é de "+s)



}