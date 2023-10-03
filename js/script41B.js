function ex41B (){

  alert ("Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.")

  let valor = parseInt(prompt("Digite um numero: "))

  if (valor<0){
    valor= -1 * valor 
    alert (`${valor}`)
  }
  else {
    alert (`${valor}`)
  }
    
    
    }