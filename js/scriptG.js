function exG (){

// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
// utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
// C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
// multiplicação e apresentar doze resultados de saída.

alert ("Este programa le quatro numeros inteiros e apresenta o resultado da adição e nultiplicação.")
let a = parseInt (prompt("Digite um numero sem virgula: "))
let b = parseInt (prompt("Digite um numero sem virgula: "))
let d = parseInt (prompt("Digite um numero sem virgula: "))
let c = parseInt (prompt("Digite um numero sem virgula: "))

//soma

let soma1 = a + b
alert ("O resutaldo de a+b é: "+soma1)

let soma2 = a + c
alert ("O resutaldo de a+c é: "+soma2)

let soma3 = a + d
alert ("O resutaldo de a+d é: "+soma3)

let soma4 = b + c
alert ("O resutaldo de b+c é: "+soma4)

let soma5 = b + d
alert ("O resutaldo de b+d é: "+soma5)

let soma6 = c + d
alert ("O resutaldo de c+d é: "+soma6)

//multiplicacao

let multiplicacao1 = a * b
alert ("O resutaldo de a*b é: "+multiplicacao1)

let multiplicacao2 = a * c
alert ("O resutaldo de a*c é: "+multiplicacao2)

let multiplicacao3 = a * d
alert ("O resutaldo de a*d é: "+multiplicacao3)

let multiplicacao4 = b * c
alert ("O resutaldo de b*c é: "+multiplicacao4)

let multiplicacao5 = b * d
alert ("O resutaldo de b*d é: "+multiplicacao5)

let multiplicacao6 = c * d
alert ("O resutaldo de c*d é: "+multiplicacao6)


}