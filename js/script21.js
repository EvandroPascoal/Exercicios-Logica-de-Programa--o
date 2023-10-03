function ex21 (){
alert ("Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.")

let num = parseInt(prompt("Digite a hora (sem os minutos) que iniciou o jogo de xadrex: "))
let num2 = parseInt(prompt("Digite a hora (sem os minutos) que terminou o jogo de xadrex: "))
let duracao = 0
if (num2 < num){
duracao = (24 - num) + num2
alert (`A duração do jogo é de ${duracao}hr`)
}
else if (num2 > num) {
    duracao = num2 - num
    alert (`A duração do jogo é de ${duracao}hr`)
}
else (num2 = num) ; {
duracao = 24
alert (`A duração do jogo é de ${duracao}hr`)

}
}

