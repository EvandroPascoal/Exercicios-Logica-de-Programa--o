function ex25 (){
alert ("Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.")

let conta = parseInt(prompt("Digite o numero da sua conta: "))
let saldo = parseInt(prompt("Digite o valor do seu saldo: "))
let debito = parseInt (prompt("Digite o valor do debito: "))
let credito = parseInt (prompt("Digite o valor do credito"))
let saldoAtual = saldo - debito + credito

if (saldoAtual>= 0){
    alert (`Saldo Positivo: ${saldoAtual}R$`)
}
else {

    alert (`Saldo Negativo: ${saldoAtual}R$`)
}

}
