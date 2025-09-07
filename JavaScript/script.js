//1. Introdução e Imprimindo Mensagens
document.writeln("Olá turma bem vindos ao JavaScript!")
console.log("Olá turma bem vindos ao JavaScript!")
//2. Variáveis e Tipos de Dados .. & .. 3. Funções Simples
const nome = "Rayan";
const idade = 26;
//verifica uma condicional caso usuario goste ou não de JavaScript e retorna uma mensagem em "alert"
let gostaDeJs = prompt("Você gosta de JavaScript?")
if (gostaDeJs == "um entusiasta") {
    alert("Você é fraco!");
} else if (gostaDeJs == "curioso") {
    alert("Conhecimento é poder!!!");
} else {
    alert("ERROR 438");
}

console.log(`Olá, meu nome é ${nome}! Eu tenho ${idade} anos.`);
//função que retorna um valor imprimindo uma frase/saudação
function saudar() {
    return function (name) {
        return `Hello, ${name}`
    }
}
const cumprimentar = saudar();
console.log(cumprimentar("Little Johny"));
//função que soma 2 numeros e retorna o valor
function soma(a, b) {
    return a + b
}
console.log(soma(2, 2))

//4. Interação Condicional

// Estrutura "for"
let i = 0;//inicia o indice em 0 para garantir os valores
let sum1 = 0;//inicia o indice em 0 para garantir os valores
for (let i = 0; i < 10; i++) {
    sum1 += i;
    console.log(`Soma até ${i + 1}: ${sum1}`);
}
console.log("__________separação__________")
////Estrutura "while"
let j = 0; //inicia o indice em 0 para garantir os valores
let sum2 = 0; //inicia o indice em 0 para garantir os valores
while (j < 10) {
    sum2 += j;
    console.log(`Soma até ${j + 1}: ${sum2}`);
    j++;
}
//Estrutura "do-while" ... "A estrutura do-while está muito pesada e não está rodando"
//let k = 0
//do {
//  console.log("Executa pelo menos uma vez");
//} while (k < 10){
//    console.log("Esse é em .Do-While. ", k + 1)
//    k++;
//}

//6. Switch de Cores
let cor = prompt("Digite uma cor: vermelho, verde ou azul");
cor = cor.toLowerCase();// Normaliza a entrada para minúsculas
//Insere no prompt qual cor vai ser escolhida.
switch (cor) {
    case "vermelho":
        alert("Você escolheu vermelho");
        break;
    case "verde":
        alert("Você escolheu verde");
        break;
    case "azul":
        alert("Você escolheu azul");
        break;
    default:
        alert("Cor não reconhecida");
}
