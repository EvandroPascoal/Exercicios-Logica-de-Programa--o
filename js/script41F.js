function ex41F (){
alert ("Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.")
    
    let A = parseInt(prompt("Digite um valor: "))
    let B = parseInt(prompt("Digite um valor: "))
    let C = parseInt(prompt("Digite um valor: "))

    let maior, menor, medio

    if ((A>B) && (A>C)){
       if (B>C){
        maior = A
        medio = B
        menor = C
       }
       else {
        maior = A
        medio = C
        menor = B
       }
    }

    if ((B>A) && (B>C)){
        if (A>C){
         maior = B
         medio = A
         menor = C
        }
        else {
         maior = B
         medio = C
         menor = A
        }
     }

     if ((C>B) && (C>A)){
        if (B>A){
         maior = C
         medio = B
         menor = A
        }
        else {
         maior = C
         medio = A
         menor = B
        }
     }
         
     alert (`A ordem crescente dos valores é: ${menor} , ${medio} , ${maior}`)








          }