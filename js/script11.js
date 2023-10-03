// Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
// mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
// efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
// vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor


function ex11 (){

let salario = parseInt(prompt("Informe o seu salario fixo: "))
let comissao = parseInt(prompt("Digite o valor da comissao por cada carro vendido: "))
let vendidos = parseInt(prompt("Digite a quantidade de carros vendidos: "))

let quantidade =  vendidos * comissao 

let percentual = (quantidade*5)/100
let salarioFinal = percentual + salario

alert (`O salario final deste vendendor é de ${salarioFinal}R$`)

}