// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
// de eleitores.

function ex8 (){

alert("Este programa calcula e escreve o percentual que cada um\n(votos brancos, nulos e válidos) representa em relação ao total de eleitores.")

let brancos = parseInt(prompt("Digite a quantidade de votos em branco que teve nessa eleição: "))
let nulos = parseInt(prompt("Digite a quantidade de votos nulos que teve nessa eleição: "))
let validos = parseInt(prompt("Digite a quantidade de votos validos que teve nessa eleição: "))

let eleitores = brancos + nulos + validos

let percentualB = (brancos * 100) / eleitores
let percentualN = (nulos * 100) / eleitores
let percentualV = (validos * 100) / eleitores

alert("O perncentual de votos em branco nessa eleiçao é de: " + percentualB + " %")
alert("O perncentual de votos nulos nessa eleiçao é de: " + percentualN + " %")
alert("O perncentual de votos validos nessa eleiçao é de: " + percentualV + " %")

}

