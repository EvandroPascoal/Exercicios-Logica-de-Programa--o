// Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
// área do retângulo.

function ex6(){           

alert ("Este programa calcula a area de um retangulo")
let base = parseInt(prompt("Digite o valor da base em centimetros"))
let altura = parseInt(prompt("Digite o valor da altura em centimetros"))
let area = (base*altura)/2
let perimetro = base*base*altura*altura

alert ("A area do retângulo é"+area+"m")
alert ("O perimetro deste retângulo é de: "+perimetro)

}