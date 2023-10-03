function ex50I (){


alert ("Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.")


let numero = 0
let maior = 0
let menor = 0

numero = parseInt(prompt("Digite um numero: "))

menor = numero
maior = numero

do {

    numero = parseInt(prompt("Digite um numero: "))

if (numero > maior){
    maior = numero
}

if ((numero < menor) && (numero > -1)){
    menor = numero
}
    
} while (numero > -1);

alert (`O maior numero digitado foi: ${maior} \nO menor numero digitado foi: ${menor}`)





}