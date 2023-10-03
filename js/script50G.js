function ex50G (){

alert ("Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares z situados na faixa numérica de 1 a 10.")

let numero = 0
let fatorial = 0
let numero2 = 0
let contadora = 1
let fatorial2 = 0


do {

    if (contadora == 1){
        alert (`O valor do fatorial do numero ${contadora} é de ${contadora}`)
    }

    else{                                
    
         numero = contadora
        fatorial = numero - 1
        numero2 = numero - 1

     do {

        fatorial2 = numero * numero2
        numero = fatorial - 1
        fatorial = fatorial - 1
        numero2 = fatorial2

     } while (numero > 1);
     alert (`O valor do fatorial do numero ${contadora} é de ${fatorial2}`)
    }
     

contadora = contadora + 2

} while (contadora < 11);



}