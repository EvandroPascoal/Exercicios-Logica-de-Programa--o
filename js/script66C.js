function ex66C (){
alert ("Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).")

let soma = 0

for (let numero = 1; numero < 101; numero++) {
 
    soma = numero + soma
    
}
alert (`A soma dos 100 primeiros numeros é: ${soma}`)



}