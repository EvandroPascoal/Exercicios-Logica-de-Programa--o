function ex66K() {

    alert("Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.")

    let valor2 = 0
    let fatorial = 0
    let valor = 0
    let fixo = 0
    let valor3 = 0

    alert (`O fatorial de 1 é: 1`)
    for (let numero = 3; numero < 11; numero += 2) {

       
                            
        fixo = numero
        valor = numero
        valor2 = numero - 1
        valor3 = numero - 1
        for (valor2; valor2 > 1; valor2--) {

            fatorial = valor * valor3
            valor = fatorial
             valor3--

        }
    

  alert (`O fatorial de ${fixo} é: ${fatorial}`)

        //   4 x 3 = 12
        //   2 x 12 = 24





    }


}