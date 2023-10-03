function ex32 (){

alert ("Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.")
let nome1 = prompt("Digite o nome do primeiro time: ")
let gols1 = parseInt(prompt(`Digite o numero de gols marcados pelo time: ${nome1}`))

let nome2 = prompt("Digite o nome do segundo time: ")
let gols2 = parseInt(prompt(`Digite o numero de gols marcados pelo time: ${nome2}`))

if (gols1>gols2){
    alert (`O time vencedor é ${nome1} com o total de ${gols1} gols marcados`)
}
    else if (gols2>gols1){
        alert (`O time vencedor é ${nome2} com o total de ${gols2} gols marcados`)
    }
    else {
        alert ("Este jogo foi empate!")
    }

    }
