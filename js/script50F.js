function ex50F (){


    alert ("Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.")

    let numero = 0 
    let soma = 0
    let contadora = 0
    let media = 0

    do {
        
       numero = parseInt(prompt("Digite um numero: "))
        soma = numero + soma 
        contadora++
    } while (numero > -1);
      soma = soma - numero
    contadora = contadora - 1


    media = soma/contadora

    alert (`O somatorio total dos valores lidos é de: ${soma} \nA média aritmética desses valores é: ${media} \nO total de valores lidos foi: ${contadora}`)




}