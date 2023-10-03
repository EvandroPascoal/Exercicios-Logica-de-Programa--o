function ex14() {
    alert("Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!")

    let numero = parseInt(prompt("Digite um numero: "))
    if (numero > 10) {
        alert("O numero é maior que 10!")
    }
    else {
        alert("O numero não é maior que 10")
    }

}