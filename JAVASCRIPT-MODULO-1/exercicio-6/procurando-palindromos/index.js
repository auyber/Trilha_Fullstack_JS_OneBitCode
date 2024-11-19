let palavra = prompt("Digite sua palavra para sabermos se é um palíndromo: ")

let palindromo ="";

//formula para armazenar as palavras no palindromo inversamente.
for (let i = palavra.length - 1; i>= 0; i--) {
    palindromo += palavra[i];
}

//Depois comparar se a palavra armazenada na variavel palavra é igual a palavra armazena no palindromo
if (palavra === palindromo) {
    alert("Essa palavra é um palíndromo! :D")
} else { //caso não seja, trazer uma mensagem mostrando a palabra normal e a palavra do palindromo
    alert("Essa palavra não é um palíndromo! :(\n" + palavra +
        "\n" + palindromo);
}


