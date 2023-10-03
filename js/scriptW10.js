function exW10 (){


    alert ("Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor.")

    let numero = parseInt(prompt("Digite um numero para saber a tabuada"))
    valor = 1
    while (valor <= 10) {
    let resultado = valor * numero 
    alert (`${valor} x ${numero} = ${resultado}`)
    valor = valor + 1
    }


    
}