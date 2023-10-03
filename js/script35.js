function ex35 (){
alert ("Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.")

let tipo = prompt("Digite A para abastecer a álcool ou digite G para abastecer a gasolina: ")
let litros = parseInt (prompt("Digite quantos litros você deseja abastecer: "))

if (tipo == "A" & litros < 20){
let desconto = 2.90 - ((2.90*3)/100)
let valor = desconto * litros
alert (`O valor a ser pago é de: ${valor} A3`)
}

else if (tipo == "A" & litros > 20){
let desconto = 2.90 - ((2.90*5)/100)
let valor = desconto * litros
alert (`O valor a ser pago é de: ${valor} A5 `)
}

else if (tipo == "G" & litros < 20){

    let desconto = 3.30 - ((3.30*4)/100)
    let valor = desconto * litros
    alert (`O valor a ser pago é de: ${valor} G4`)
    }

    else {

        let desconto = 3.30 - ((3.30*6)/100)
        let valor = desconto * litros
        alert (`O valor a ser pago é de: ${valor} G6`)
        }


}