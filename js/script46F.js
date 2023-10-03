function ex46F (){
    alert ("Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor  do expoente. Observe que neste exercício não pode ser utilizado operador de exponenciação do portuguol (^).")

    let B = parseInt(prompt("Digite o valor da base: "))
    let E = parseInt(prompt("Digite o valor do expoente: "))

    let base = B
    let expo = E

    

    while (E != 1) {
        B = base * B
        E = E - 1

       
        
    }
    alert (`${base}^${expo} = ${B}`)
    




}