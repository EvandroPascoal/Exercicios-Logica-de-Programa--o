// Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.

function ex5(){       

    alert ("Este programa apresenta o numero antecessor")
    let valor = parseInt(prompt("Digite"))
    let antecessor = valor - 1
    let sucessor = valor + 1
    
    alert ("O atencessor do numero "+valor+" é "+antecessor)
    alert ("O sucessor do numero "+valor+" é "+sucessor)
    
    }