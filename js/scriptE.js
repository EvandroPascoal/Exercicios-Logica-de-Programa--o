function exE (){
    // Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
// PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).

alert ("Este programa calcula o valor de uma prestação em atrsaso")
let valor = parseInt (prompt("Digite o valor da prestação em real: "))
let taxa = parseInt (prompt("Digite o valor da taxa em real: "))
let tempo = parseInt (prompt("Digite quantos meses a prestação esta atrasada: "))
let prestacao = valor + (valor * taxa/100) * tempo
alert ("O valor da prestação é de: "+prestacao+"R$")
}