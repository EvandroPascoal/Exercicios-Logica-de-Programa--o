function ex24 (){

alert ("Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.")

let salarioFixo = parseInt(prompt("Digite o salário fixo deste vendedor: "))
let vendas = parseInt(prompt("Digite o valor das vendas efetuadas pelo vendedor: "))

if (vendas<1500){
vendas = (vendas*3)/100
let salarioFinal = vendas + salarioFixo
 alert (`O salário total deste vendedor é: ${salarioFinal}R$`)


}
else {
    vendas = (vendas*5)/100
let salarioFinal = vendas + salarioFixo
 alert (`O salário total deste vendedor é: ${salarioFinal}R$`)

}

}