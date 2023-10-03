function ex50B (){
    alert ("Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.")

    let numero = 1
     let soma = 0
    do {
       if (numero % 2 == 0){
         soma = numero + soma
       }
        numero++
    } while (numero < 501);

    alert (`O somatório dos valores pares existentes na faixa de 1 até 500 é de: ${soma}`)
}