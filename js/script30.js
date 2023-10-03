function ex30(){

    alert ("Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.")
    let numero1 = parseInt(prompt("Digite um numero: "))
    let numero2 = parseInt(prompt("Digite um numero diferente do primeiro: "))
    let numero3 = parseInt(prompt("Digite um numero diferente do primeiro e do segundo: "))
    
    if (numero1>numero2 && numero2>numero3){
    let maior = numero1
    let medio = numero2
    let menor = numero3
    
    alert (`A ordem crescente dos valores é: ${menor} , ${medio} , ${maior}`)
    
    }
    
    else if (numero1>numero3 && numero3>numero2){
        let maior = numero1
        let medio = numero3
        let menor = numero2
        
        alert (`A ordem crescente dos valores é: ${menor} , ${medio} , ${maior}`)
    }
    
    else if (numero2>numero1 && numero2>numero3 && numero3>numero1){
        let maior = numero2
        let medio = numero3
        let menor = numero1
        
        alert (`A ordem crescente dos valores é: ${menor} , ${medio} , ${maior}`)
    }

    else if (numero2>numero1 && numero2>numero3 && numero1>numero3){
        let maior = numero2
        let medio = numero1
        let menor = numero3
        
        alert (`A ordem crescente dos valores é: ${menor} , ${medio} , ${maior}`)
    }
    
    else if (numero3>numero1 && numero3>numero2 && numero2>numero1){
        let maior = numero3
        let medio = numero2
        let menor = numero1
        
        alert (`A ordem crescente dos valores é: ${menor} , ${medio} , ${maior}`)
    }
    else {
        
            let maior = numero3
            let medio = numero1
            let menor = numero2
        
            alert (`A ordem crescente dos valores é: ${menor} , ${medio} , ${maior}`)
        }


}