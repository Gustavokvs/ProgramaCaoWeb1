
var msg = "Boa Noite!!"
console.log(msg);

let nome;
nome = "Gustavo Kruger Vargas Seabra";// atribuição posterior
console.log(nome); //


let idade, idade2;
idade = 18, idade2 = 20, diferença = 0;
if (idade < idade2) {
    diferença = idade2 - idade;
} else {
    diferença = idade - idade2;
}
console.log(diferença);

let numeroInt, numeroDec, soma;
numeroInt = 10, numeroDec = 10.60;
soma = numeroInt + numeroDec;
console.log(soma);

let email, valido;
email = "gustavokruger514@gmail.com";
const temArroba = /@/.test(email);
console.log(email);
if (temArroba) {
    console.log("Endereço válido")
} else {
    console.log("inválido");
}

let cores;
cores = ["amarelo", "azul", "Vermelho"];
console.log(cores[2]);

let numero = 15;
if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("Divisível por 3 e 5");
} else {
    console.log("Não divisível por 3 e 5");
}

let numero1 = 10, numero2 = 8;
if (numero1 > numero2) {
    console.log(numero1 + " É maior que " + numero2);
} else if (numero2 > numero1) {
    console.log(numero2 + " É maior que " + numero1);
} else {
    console.log("os numeros são iguais")
}

const estaChovendo = false;
const estaVentando = false;


if (estaChovendo || estaVentando) {
    console.log("Vou levar guarda-chuva");
} else {
    console.log("Não preciso de guarda-chuva");
}

let numeroPOUN = -20;
if (numero = /-/.test(numeroPOUN)) {
    console.log("É negativo")
} else {
    console.log("É positivo")
}

let numeroIouP = 7
if (numeroIouP % 2 == 0) {
    console.log(numeroIouP + " É Par.")
} else {
    console.log(numeroIouP + " É impar.")
}