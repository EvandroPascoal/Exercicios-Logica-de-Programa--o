function ex20 (){

    alert ("Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.")
    let numero = parseInt(prompt("Digite o primeiro valor: "))
    let numero2 = parseInt(prompt("Digite o segundo valor diferente do primeiro: "))

    if (numero>numero2){
     alert (`A ordem crescente dos valores é ${numero2} - ${numero}`)


    }
    else {
        alert (`A ordem crescente dos valores é ${numero} - ${numero2}`)
    }
}