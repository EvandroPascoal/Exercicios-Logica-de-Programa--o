function ex46J (){

alert ("Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.")

let numero = 50
let soma = 0
let media = 0
let contadora = 0

while (numero < 71){
   
    if (numero % 2 == 0){
        soma = numero + soma
        contadora++

    }
    numero++
}

media = soma / contadora
alert(`O somatório total desses valores é: ${soma}`)
alert(`A média aritmética desses valores é: ${media}`)

}