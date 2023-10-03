function ex46L (){

alert ("Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.")

let valor = 0
let maior = 0
let menor = 0


if (valor == 0) {     
    maior = valor 
    menor = valor
    }

while (valor >= 0){
   

if (valor > maior){
    maior = valor
}
if ((valor < menor) || (menor == 0)){
    menor = valor
}
valor = parseInt(prompt("Digite um valor: "))


}
alert (`O Maior valor digitado foi: ${maior} \nO Menor valor digitado foi: ${menor}`)

}