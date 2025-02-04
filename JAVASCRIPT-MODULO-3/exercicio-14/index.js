// Operações:
// Média Aritmética Simples: Pode ser calculada somando todos os 

const aritmeticaSimples = (...numbers) => {
    if (numbers.length === 0) return 0

    const soma = numbers.reduce((acc, num) => acc + num, 0)
    return soma / numbers.length
}

console.log(aritmeticaSimples(1,2,3,4,5))


Média Aritmética Ponderada
const mediaPonderada = (notasPesos) => {
    let somaPonderada = notasPesos.reduce((acc, [nota, peso]) => acc + nota * peso, 0)
    let somaPeso = notasPesos.reduce((acc, [,peso]) => acc + peso, 0)
    return somaPeso === 0 ? 0 : somaPonderada / somaPeso
}

console.log(mediaPonderada([[7,2],[9,5],[3,1]]))




//Mediana
const mediana = (...numeros) => {
    const ordenados = numeros.sort((a, b) => a - b);
    const meio = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 !== 0) {
        return ordenados[meio]; // Ímpar: retorna o número central
    }

    return (ordenados[meio - 1] + ordenados[meio]) / 2; // Par: média dos centrais
};

console.log(mediana(2, 4, 5, 7, 42, 99)); // 6 números → Média entre 5 e 7 → Resultado: 6
console.log(mediana(15, 14, 8, 7, 3));   // 5 números → Número central = 8


//MODA
const moda = (...numeros) => {
    const contagem = {};

    // Contar a frequência de cada número
    numeros.forEach(num => {
        contagem[num] = (contagem[num] || 0) + 1;
    });

    // Encontrar a maior frequência
    const maxFrequencia = Math.max(...Object.values(contagem));

    // Encontrar todos os números com a maior frequência
    const modas = Object.keys(contagem).filter(num => contagem[num] === maxFrequencia);

    // Retorna a moda, ou modas em caso de empate
    return modas.map(Number);
};

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)); // [4]
console.log(moda(1, 1, 5, 5, 9, 7, 3, 3));               // [1, 5, 3] (se houver empate)
console.log(moda(2, 2, 2));                            // [2]
console.log(moda(9, 7, 3, 0));                        // [9, 7, 3, 0] (se todos aparecem 1 vez)
