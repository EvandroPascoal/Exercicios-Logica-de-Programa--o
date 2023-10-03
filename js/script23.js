function ex23(){
let nome = prompt("Digite seu nome: ")
let sexo = prompt("Digite (M) para sexo Masculino ou digite (F) para sexo feminino: ")
let altura = parseFloat(prompt("Digite a sua altura: "))


if (sexo == "M"){
    let pesoIdeal = (72.7 * altura) - 58
alert (`Seu peso ideal é ${pesoIdeal}`)
}

else if (sexo == "F"){
    let pesoIdeal = (62.1 * altura) - 44.7
    alert (`Seu peso ideal é ${pesoIdeal}`)

}

else (sexo != "F" || sexo != "M");{

 alert ("Digite M ou F para dizer seu sexo!")
}


}



// Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
// e mostre seu peso ideal, utilizando as seguintes fórmulas:
// - para sexo masculino: peso ideal = (72.7 * altura) - 58
// - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
// inicio
// ler nome
// ler sexo
// se sexo = M então
// peso_ideal  (72.7 * altura) - 58
// senão
// peso_ideal  (62.1 * altura) – 44.7
// fim_se
// escrever peso_ideal
// fim