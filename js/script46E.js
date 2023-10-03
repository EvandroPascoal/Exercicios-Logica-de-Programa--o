function ex46E() {
    alert("Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).")

    let numero = 3
    let expoente = 1
    let resultado = 1

    alert(`3 ^ 0 = 1`)

    while (resultado < 16) {

        while (expoente == 2) {
            numero = 3 * numero
            expoente = expoente - 1
        }
        expoente++

        alert(`3 ^ ${resultado} = ${numero}`)
        resultado++


    }

}

// if (expoente == 0){
//     alert (`3^0 = 1`)
// }
// if (expoente == 1){
//     alert (`3^1 = 3`)
// }