function ex41A (){

alert ("Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.")

let A = parseInt(prompt("Digite um valor: "))
let B = parseInt(prompt("Digite um valor: "))

let maior
let menor

if (A>B){

maior = A
menor = B

}
else {
maior = B 
menor = A

}

let diferenca = maior - menor

alert (`O valor da diferença entre esses dois numeros é de: ${diferenca}`)


}