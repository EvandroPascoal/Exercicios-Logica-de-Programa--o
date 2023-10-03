function ex50J (){

alert ("Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.")

let dividendo = parseInt(prompt("Digite o dividendo: "))
let divisor = parseInt(prompt("Digite o divisor: "))

if (divisor === 0) {
    alert("Divisão por zero não é permitida.");
  } else {
    let quociente = 0;
    let sinal = 1;
  
    
    if (dividendo < 0) {
      dividendo = -dividendo;
      sinal = -sinal;
    }
    if (divisor < 0) {
      divisor = -divisor;
      sinal = -sinal;
    }
  
   
    do {
      dividendo -= divisor;
      quociente++;
    } while (dividendo >= divisor);
  
    
    quociente *= sinal;
  
   
    alert("O resultado inteiro da divisão é: " + quociente);
  }


}

