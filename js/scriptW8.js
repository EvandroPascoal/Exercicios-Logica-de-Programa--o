function exW8 (){


    alert ("Escreva um programa que leia dois números inteiros e troque os seus valores, ou seja, o primeiro deve ficar com o valor do segundo e vice-versa. ")

    let numero = parseInt(prompt("Digite um numero: "))
    let numero2 = parseInt(prompt("Digite um numero"))
    
    let numero3 = numero
    numero = numero2
    numero2 = numero3
    
    alert (`O valor do numero 1 é: ${numero} \nO valor do numero 2 é: ${numero2}`)


    
}