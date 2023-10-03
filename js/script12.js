function ex12 (){

    alert ("Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo)")

let F = parseFloat(prompt("Digite a temperatura em Fahreg"))
let C = (F - 32)* 5/9

alert ("O valor convertido para celsius: "+C)

}



// (32 °F − 32) × 5/9 = 0 °C