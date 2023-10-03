function ex41H() {

    alert("Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.")

    let numero
    let maior = 0
    let menor = 0
    

    for ( let contadora = 1; contadora < 6; contadora++) {

        numero = parseInt(prompt("Digite um numero: "))
        if (contadora == 1) {
            maior = numero
            menor = numero

        }


        else if (numero > maior) {
            maior = numero

        }
        else if (numero < menor) {
            menor = numero

        }

        

    }

    alert(`O numero menor é: ${menor}`)
        alert(`O numero maior é: ${maior}`)



}