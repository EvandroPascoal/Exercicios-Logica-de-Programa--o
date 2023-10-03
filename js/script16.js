// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
// escreva o custo total da compra.

function ex16 (){

let custa1 = 0
let custa2 = 0
alert ("As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.")
let maca = parseInt(prompt("Digite quantas Maçãs você quer comprar: "))
if (maca < 12){

custa1 = maca * 1.30
alert(`O numero de maçãs compradas é ${maca}\ne o custo total da compra é ${custa1}R$`)

}

else {
    custa2 = maca * 1
    alert(`O numero de maçãs compradas é ${maca}\ne o custo total da compra é ${custa2}R$`)
}



}