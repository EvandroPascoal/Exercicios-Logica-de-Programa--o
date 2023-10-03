function ex41D (){

    alert ("Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.")
    
    let nota1 = parseInt(prompt("Digite a primeira nota do aluno: "))
    let nota2 = parseInt(prompt("Digite a segunda nota do aluno: "))
    let nota3 = parseInt(prompt("Digite a terceira nota do aluno: "))
    let nota4 = parseInt(prompt("Digite a quarta nota do aluno: "))
    
    let media = (nota1+nota2+nota3+nota4)/4
    let exame
    
    if (media>=7){
        alert (`Aluno aprovado! a sua nota foi: ${media}`)
    }
    else {
        exame = parseInt(prompt("Digite a nota de exame do aluno: "))
        media = (media + exame)/2

        if (media >= 5){
            alert (`Aluno aprovado em exame! a sua nota foi: ${media}`)
        }
        else{
            alert (`Aluno reprovado!`)
        }
        
    }
    
    
          
          }