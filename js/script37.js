function ex37 (){
alert ("Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.")

let morangos = parseInt(prompt("Digite a quantidade de morangos que deseja comprar em Kg: "))
let maca = parseInt(prompt("Digite a quantidade de maçã que deseja comprar em Kg: "))
let kg = morangos + maca

if (morangos<=5){
    morangos = morangos * 2.50 
}
else {
    morangos = morangos * 2.20
}
 if (maca<=5){
 maca = maca * 1.80 

 }
 else {
    maca = maca * 1.50 
 }
 let valor = maca + morangos

if (kg>8 || valor > 25){
let desconto = (valor*10)/100
valor = valor - desconto
alert (`O valor a ser pago é de: ${valor .toFixed(2)}R$`)

}
else {
    alert (`O valor a ser pago é de: ${valor .toFixed(2)}R$`)
}



}

