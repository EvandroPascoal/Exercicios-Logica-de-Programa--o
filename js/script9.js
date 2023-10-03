// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário.

function ex9 (){


alert ("Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.Calcular e escrever o valor do novo salário.")

let salario = parseFloat(prompt("Digite seu salario atual: "))
let reajuste = parseInt(prompt("Digite o valor do reajuste: "))
reajuste = reajuste / 100
let salarioN = salario + (salario*reajuste)
alert ("O seu novo salario é: "+salarioN)



    
}