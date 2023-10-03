function ex66D (){
    alert ("Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.")

let soma = 0

for (let numero = 1; numero < 500; numero++) {
    if (numero % 2 == 0){
       soma = numero + soma 


    }
    
}
alert (`O somatório dos valores pares existentes na faixa de 1 até 500 é: ${soma}`)


}