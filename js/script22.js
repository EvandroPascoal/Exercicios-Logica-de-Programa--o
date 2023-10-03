function ex22 (){
alert ("A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas(considere que o mês possua 4 semanas exatas).")

// 160 mes

let horaTrabalhada = parseInt(prompt("Digite a quantidade de horas trabalhadas no mês: "))
let salarioHora = parseInt(prompt("Digite o valor do salario por hora trabalhada: "))
let salarioExtra = 0
let salarioTotal = 0
let horaExtra = horaTrabalhada - 160

if (horaExtra>0) {
salarioExtra = ((salarioHora*50)/100) + salarioHora
salarioTotal = (160 * salarioHora) + (salarioExtra * horaExtra)
alert (`O salario total deste funcionario é de ${salarioTotal}R$`)

} 

else {
    salarioTotal = salarioHora*horaTrabalhada
    alert (`O salario total deste funcionario é de ${salarioTotal}R$`)
}

}