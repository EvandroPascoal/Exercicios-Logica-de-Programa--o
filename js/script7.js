// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

function ex7(){                      
alert ("Este programa apresenta a idade de uma pessoa em dias")
let anos = parseInt(prompt("Digite quantos anos você tem: "))
let meses = parseInt(prompt("Quantos meses: "))
let dias = parseInt(prompt("E quantos dias: "))

let covercaoA = anos * 365
let convercaoB = meses * 30

let diasTotal = consercaoA + convercaoB + dias

alert ("A sua idade em dias é: "+diasTotal)
}