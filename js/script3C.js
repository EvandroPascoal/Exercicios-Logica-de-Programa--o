function ex3C (){

// Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a
// apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para
// cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de
// votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e
// votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos
// válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de
// eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de
// eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de
// eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de
// eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último
// o percentual correspondente de votos em branco em relação à quantidade de eleitores.

alert ("Eleição")

let a = parseFloat (prompt("Digite quantos votos o candidato A recebeu: "))
let b = parseFloat (prompt("Digite quantos votos o candidato B recebeu: "))
let c = parseFloat (prompt("Digite quantos votos o candidato C recebeu: "))
let nulo = parseFloat (prompt("Digite quantos votos nulos tiveram esta eleição: "))
let branco = parseFloat (prompt("Digite quantos votos em brancos tiveram esta eleição: "))

let totalEleitores = a + b + c + nulo + branco
let percentualVotosValidos = ((a + b + c) / totalEleitores) * 100
let percentualVotosNulos = (nulo / totalEleitores) * 100
let percentualVotosBranco = (branco / totalEleitores) * 100
let percentualA = (a / totalEleitores) * 100
let percentualB = (b / totalEleitores) * 100
let percentualC = (c / totalEleitores) * 100


alert ("Número total de eleitores: "+ totalEleitores)
alert ("Percentual de votos válidos: "+ percentualVotosValidos+ "%")
alert ("Percentual de votos do candidato A: "+ percentualA+ "%")
alert ("Percentual de votos do candidato B: "+ percentualB+ "%")
alert ("Percentual de votos do candidato C: "+ percentualC+ "%")
alert ("Percentual de votos nulos: "+ percentualVotosNulos+ "%")
alert ("Percentual de votos em branco: "+ percentualVotosBranco+ "%")


}