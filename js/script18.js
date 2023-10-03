function ex18 (){

    alert ("Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).")
    let ano = parseInt(prompt("Digite o ano que você nasceu: "))
    let voto = 2023 - ano

    if (voto < 16) {          
    alert (`Não pode votar!`)


   } 
   else if (voto < 18 ){
    alert ("Voto opcional!")

   }
  
   else {

    alert ("Voto Obrigatorio!")

   }

}