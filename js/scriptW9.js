function exW9 (){

    alert ("Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses. ")
let numero = parseInt(prompt("Digite o valor do deposito mensal: "))
let juros2 = parseInt(prompt("Digite o valor do juros em porcentagem"))
let numero2 = 12 * numero
let juros = (numero*juros2)/100
let montante = (juros*12) + numero2

alert (`O valor do montante após 12 meses é de: ${montante}`)





    
}