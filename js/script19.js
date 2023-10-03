function ex19 (){
alert ("Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.")
let valor = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite um segundo valor diferente do primeiro: "))

if (valor>valor2){
    alert (`O maior valor é ${valor}`)

}
else {
    alert (`O maior valor é ${valor2}`)
}


}