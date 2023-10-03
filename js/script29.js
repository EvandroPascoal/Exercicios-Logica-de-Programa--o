function ex29(){

alert ("Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.")
let numero1 = parseInt(prompt("Digite um numero: "))
let numero2 = parseInt(prompt("Digite um numero diferente do primeiro: "))
let numero3 = parseInt(prompt("Digite um numero diferente do primeiro e do segundo: "))

if (numero1>numero2 & numero2>numero3){
let maior = numero1
let medio = numero2
let soma = maior + medio
alert (`A soma dos dois valores maiores é: ${soma}`)

}

else if (numero1>numero2 & numero3>numero2){
    let maior = numero1
    let medio = numero3
    let soma = maior + medio
alert (`A soma dos dois valores maiores é: ${soma}`)
}

else if (numero2>numero1 & numero3>numero1){
    let maior = numero2
    let medio = numero3
    let soma = maior + medio
alert (`A soma dos dois valores maiores é: ${soma}`)
}
else if (numero2>numero1 & numero1>numero3){
    let maior = numero2
    let medio = numero1
    let soma = maior + medio
alert (`A soma dos dois valores maiores é: ${soma}`)
}

else if (numero3>numero1 & numero2>numero1){
    let maior = numero3
    let medio = numero2
    let soma = maior + medio
alert (`A soma dos dois valores maiores é: ${soma}`)
}
else {
    
        let maior = numero3
        let medio = numero1
        let soma = maior + medio
alert (`A soma dos dois valores maiores é: ${soma}`)
    }
    




}













// if (numero1>numero2 & numero2>numero3 & numero1>numero3){
//     let soma = numero1+numero2
//     alert (`A soma dos dois maiores é de: ${soma}`)
// }

// else if (numero1>numero2 & numero3>numero2){
//     let soma = numero1+numero3
//     alert (`A soma dos dois maiores é de: ${soma}`)
// }
// else {
//     let soma = numero2+numero3
//     alert (`A soma dos dois maiores é de: ${soma}`)
// }






// }