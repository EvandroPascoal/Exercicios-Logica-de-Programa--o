function ex41E() {

    alert("Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero")

    let A = parseInt(prompt("Digite o valor de A: "))
    let B = parseInt(prompt("Digite o valor de B: "))
    let C = parseInt(prompt("Digite o valor de C: "))

    let delta = B ^ 2 - 4 * A * C
    let X1
    let X2

    if (delta > 0) {
        X1 = (-B + Math.sqrt(delta)) / (2 * A)
        X2 = (-B - Math.sqrt(delta)) / (2 * A)
        alert(`As raízes da equação são: X1= ${X1} e X2 = ${X2}`)

        // Math.sqrt = Raiz quadrada
    }
    else if (delta = 0) {
        X1 = -B / (2 * A)
        alert(`A equação possui uma única raiz real que é X1 = ${X1}`)
    }
    else {
        alert("A equação não possui raízes reais.")
    }

}

