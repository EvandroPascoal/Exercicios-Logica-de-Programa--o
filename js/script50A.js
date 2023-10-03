function ex50A (){
    alert ("Apresentar os quadrados dos números inteiros de 15 a 200.")

    let numero = 15
     let quadrado = 0
    do {
        quadrado = Math.pow(numero,2)
        alert (`O quadrado do numero ${numero} é: ${quadrado}`)
        numero++
    } while (numero < 201);
}