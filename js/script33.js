function ex33 (){

alert ("Ler dois valores e imprimir uma das três mensagens a seguir: \n‘Números iguais’, caso os números sejam iguais \n‘Primeiro é maior’, caso o primeiro seja maior que o segundo; \n‘Segundo maior’, caso o segundo seja maior que o primeiro.")

let valor1 = parseInt(prompt("Digite um numero: "))
let valor2 = parseInt(prompt("Digite um numero: "))

if (valor1>valor2){
    alert ("O Primeiro é maior!")
}
else if (valor2>valor1){
    alert ("O Segundo é maior!")
}
else {
    alert ("Os números são iguais!")
}
}