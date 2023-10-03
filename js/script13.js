function ex13 (){

alert ("Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:")

let n1 = parseInt(prompt("Digite a primeira nota deste aluno"))
let n2 = parseInt(prompt("Digite a segunda nota deste aluno"))
let n3 = parseInt(prompt("Digite a terceira nota deste aluno"))

let media = (n1*2 + n2*3 + n3*5)/10

alert ("A media ponderada deste aluno é de: "+media)

}