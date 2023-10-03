function ex34 (){
alert ("Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:")

let x = parseInt(prompt("Digite o valor de X: "))
let y = parseInt(prompt("Digite o valor de Y: "))
let z = (x*y) + 5

if (z <= 0) {
 let resposta = 'A';
 alert (`O valor de Z é ${z} e a resposta é ${resposta}`)

}
else if (z <= 100){
    let resposta = 'B';
    alert (`O valor de Z é ${z} e a resposta é ${resposta}`)
}
else {
    let resposta = 'C';
    alert (`O valor de Z é ${z} e a resposta é ${resposta}`)
}



}


//             VARIAVEIS
// X         Y        Z        RESPOSTA
// 3         2       11           B
// 150       3       455          C
// 7        -1       -2           A
// -2        5       -5           A
// 50        3       155          C