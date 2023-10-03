function ex66B (){
    alert ("Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")

    let valor = parseInt(prompt("Digite um numero para saber a tabuada: "))
    let resultado = 0
for (let numero = 1; numero < 11; numero++) {
  
    resultado = numero * valor

    alert (`${numero} x ${valor} = ${resultado}`)
    
}







}