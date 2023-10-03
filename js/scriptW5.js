function exW5 (){

alert ("Escreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades.")

let preco = parseFloat(prompt("Digite o preço deste produto: "))
let quantidade = parseFloat(prompt("Digite a quantidade que foi comprada deste produto: "))

if (quantidade > 10){

    let desconto = ((quantidade * preco)*10)/100
    let precoFinal = (quantidade * preco) - desconto
alert (`O valor a ser pago: ${precoFinal}`)

}
else {
    let precoFinal = quantidade * preco
    alert (`O valor a ser pago: ${precoFinal}`)
}
    
}