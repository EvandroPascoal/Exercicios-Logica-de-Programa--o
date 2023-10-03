function ex66J (){

alert ("Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas.")



for (let C = 10; C < 101; C += 10) {
    let F = (9 * C + 160)/5
    alert (`${C}° Celsius convertidos para Fahrenheit é: ${F}°`)
}



}