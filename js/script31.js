function ex31 (){
alert ("Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.")
let a = parseInt(prompt("Digite um valor: "))
let b = parseInt(prompt("Digite um valor: "))
let c = parseInt(prompt("Digite um valor: "))

if((a < (b+c)) && (b < (a+c)) && (c < (b+a))) {
alert ("Esses valores formam um triangulo!")

}
else {
    alert ("Esses valores não formam um triangulo!")
}

}

