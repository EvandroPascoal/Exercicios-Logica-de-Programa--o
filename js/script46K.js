function ex46K (){

alert ("Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área  do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.")

let nome 
let largura = 0
let comprimento = 0
let area = 0
let soma = 0
let confirmacao

while (confirmacao != "NAO"){

    nome = prompt("Digite o nome do cômodo: ")
    largura = parseInt(prompt("Digite o valor da largura da(o) "+nome+" : "))
    comprimento = parseInt(prompt("Digite o valor do comprimento da(o) "+nome+" : "))
    area = largura * comprimento

    alert (`A área da(o) ${nome} é de: ${area}m²`)

    soma = soma + area 

    confirmacao = prompt("Deseja calcular a área de outro cômodo? \nDigite SIM para continuar \nDigite NAO para ver o valor total acumulado da área residencial")


}

alert (`O valor total acumulado da área residencial é: ${soma}m²`)



}