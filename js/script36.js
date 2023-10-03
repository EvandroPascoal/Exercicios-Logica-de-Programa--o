function ex36() {

    alert("Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.")

    let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "))
    let homem2 = parseInt(prompt("Digite a idade do segundo homem diferente da idade do primeiro: "))

    let mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "))
    let mulher2 = parseInt(prompt("Digite a idade da segunda mulher diferente da idade da primeira: "))

    let homemVelho = 0
    let mulherVelha = 0
    let mulherNova = 0
    let homemNovo = 0

    if (homem1 > homem2) {
        homemVelho = homem1
        homemNovo = homem2
    }
    else {
        homemVelho = homem2
        homemNovo = homem1
    }


    if (mulher1 > mulher2) {
        mulherVelha = mulher1
        mulherNova = mulher2
    }
    else {
        mulherVelha = mulher2
        mulherNova = mulher1
    }
    let soma = homemVelho + mulherNova
    let produto = homemNovo * mulherVelha

    alert(`A soma do homem mais velho ${homemVelho} + a mulher mais nova ${mulherNova} é de: ${soma}\nO produto do homem mais novo ${homemNovo} x a mulher mais velha ${mulherVelha} é de: ${produto}`)
}