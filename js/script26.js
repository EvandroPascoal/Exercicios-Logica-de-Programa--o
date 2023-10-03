function ex26 (){
    alert ("Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.")

let atual = parseInt(prompt("Digite a quantidade atual deste produto em estoque: "))
let maxima = parseInt(prompt("Digite a quantidade máxima em estoque deste produto: "))
let minima = parseInt(prompt("Digite a quantidade mínima em estoque deste produto: "))
let media = (maxima + minima)/2

if (atual >= media){
alert ("Não efetuar compra!")

}
else {
alert ("Efetuar compra!")

}

}