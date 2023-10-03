function ex3B (){

// Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do
// percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).

alert ("Este programa exibe um salario apos o reajuste") 

let sm = parseInt(prompt("Digite o salário mensal do trabalhador: "))
let pr = parseInt(prompt("Digite o percentual de reajuste a ser atribuído: "))

let ns = sm + (sm *(pr/100))

alert ("O novo salário após o reajuste é: "+ns+"R$")


// NS <- SM + (SM * (PR / 100))


}