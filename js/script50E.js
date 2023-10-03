function ex50E() {

    alert("Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido")

    let contadora = 1
    let numero = 0
    let fatorial = 0
    let fatorial2 = 0
    let numero2 = 0
    let soma = 0

    do {

        numero = parseInt(prompt(contadora+" :Digite um numero: "))

        numero2 = numero - 1    
        fatorial = numero - 1    
                                                    //5
        do {
                                                    
            fatorial2 = numero * numero2            // 5 * 4 = 20
            numero = fatorial - 1                  //3
            fatorial = fatorial - 1
            numero2 = fatorial2                     //3

        } while (numero > 1);
        soma = fatorial2 + soma

        contadora++
    } while (contadora < 16);

    alert ("A somatória do fatorial de cada valor lido é de: "+soma)



}