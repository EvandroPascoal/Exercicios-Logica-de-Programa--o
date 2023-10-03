function ex66H (){

alert ("Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^)")

let B = parseInt(prompt("Digite o valor da base: "))
let E = parseInt(prompt("Digite o valor do expoente: "))

let P = 0
let fixo = E
P = B * B
E--

for ( E ; E > 1; E--) {
    P = B * P
   
   
    
}
alert (`${B} ^ ${fixo} = ${P}`)

}












