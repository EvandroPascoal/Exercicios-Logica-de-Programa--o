function ex66G (){

alert ("Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).")

let resultado = 3

alert (`3 ^ 0 = 1`)

for (let expoente = 1; expoente < 16; expoente++) {
    resultado = 3

   
    for (let numero = expoente; numero > 1; numero--) {
       
        resultado = 3 * resultado
        
    }

    alert (`3 ^ ${expoente} = ${resultado}`)

   
}

}