function ex41L (){

alert ("Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: Ilmo Sr., se o sexo informado como masculino, ou a mensagem Ilma Sra., para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado")

let nome = prompt("Digite seu nome: ")
let sex = prompt ("Digite M se seu sexo for Masculino / Digite F se seu sexo for Feminino: ")

if ((sex == "M") || (sex == "m")){
    alert (`Ilmo Sr.${nome}`)
}
else if ((sex == "F") || (sex == "f")){
    alert (`Ilma Sra.${nome}`)
}
}