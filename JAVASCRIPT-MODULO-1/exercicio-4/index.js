/*const nome = prompt("Qual é o seu nome?")
const jaVisitou = prompt("Você já visitou alguma cidade?\nsim \nnão")

const cidadesVisitadas = []; // Criei um array vazio para armazenar as cidades

while (jaVisitou === "sim") {
    const cidade = prompt("Qual o nome da cidade que visitou?");
cidadesVisitadas.push(cidade); // Adiciona a cidade ao array
}*/

const nome = prompt("Qual é o seu nome?");
const cidadesVisitadas = []; // Cria um array vazio para armazenar as cidades

let jaVisitou = prompt("Você já visitou alguma cidade?\nsim \nnão");

while (jaVisitou === "sim") {
    const cidade = prompt("Qual o nome da cidade que visitou?");
    cidadesVisitadas.push(cidade); // Adiciona a cidade ao array
    jaVisitou = prompt("Você já visitou alguma outra cidade?\nsim \nnão"); // Pergunta novamente
}

// Exibe o resultado
alert(`Turista: ${nome}\nCidades visitadas: ${cidadesVisitadas.length}\nCidades: ${cidadesVisitadas.join(", ")}`);


