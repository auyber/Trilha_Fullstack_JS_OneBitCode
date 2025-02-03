//crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de arrow functions para calcular as operações abaixo.
/*
Operações:
Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.
Exemplo: 
media(2, 6, 3, 7, 4) === 4.4
// porque
2 + 6 + 3 + 7 + 4 === 22
// e 
22 / 5 === 4.4


Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
Exemplo: 
// n -> número, p -> peso
mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
// porque
(7 * 2) + (9 * 5) + (3 * 1) === 62
// e
62 / (2 + 5 + 1) === 7.75


Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
Exemplo:
mediana(2, 4, 5, 7, 42, 99) === 6
// porque 5 e 7 estão juntos no centro da sequência e
media(5, 7) === 6

mediana(15, 14, 8, 7, 3) === 8
// porque 8 está no centro da sequência


Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
Exemplo:
moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) === 4
// porque:
// 4 aparece 4 vezes
// 5 e 1 aparecem 2 vezes
// 9, 7, 3, 2 e 0 aparecem 1 vez
/*