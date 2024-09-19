{
    console.log("Definindo Os valores Opostos")
    let valorA, valorB;
    valorA = 20, valorB = 80;
    console.log("\n" + valorA + " " + valorB)
    valorA = valorA + 60; valorB = valorB - 60;
    console.log(valorA + " " + valorB)
}

console.log("\nCom Subtração/Soma\n")

{
    let valorA, valorB;
    valorA = 20, valorB = 80;
    console.log(valorA + " " + valorB)
    valorA = 80; valorB = valorB = 20;
    console.log(valorA + " " + valorB);
}

{
    let numeros, impares, pares;
    impares = [], pares = [];
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }

    }
    console.log("\nPares " + pares)
    console.log("Impares " + impares)
}
