function exW7 (){

    alert ("Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base. ")

    let salarioB = parseInt(prompt("Digite o salario base"))
    let salarioL = (salarioB*5)/100
    let salarioF = salarioL + salarioB
    
    alert (`O salario liquido é de ${salarioF}`)



    
}