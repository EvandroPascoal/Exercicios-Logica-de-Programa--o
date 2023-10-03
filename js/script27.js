function ex27(){

alert ("Ler um valor e escrever se é positivo, negativo ou zero.")
let numero = parseInt(prompt("Digite um numero: "))

if (numero<0){
    alert("O numero é negativo!")
}
else if (numero > 0) {
    alert ("O numero é positivo!")
}
else {
    alert ("O numero é zero!")
}
}