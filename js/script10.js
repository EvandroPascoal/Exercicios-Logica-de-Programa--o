function ex10 (){
alert (" O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.")

let custoFabrica = parseInt(prompt("Digite o valor de fábrica do carro"))

let percentualD = (custoFabrica * 28)/100
let percentualI = (custoFabrica * 45)/100

let custoFinal = percentualD + percentualI + custoFabrica

alert (`O custo final deste carro é de: ${custoFinal}`)








}