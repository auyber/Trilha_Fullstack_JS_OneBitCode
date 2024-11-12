const nome = prompt("Insira o seu nome: ")
const sobrenome = prompt("Insira o seu sobrenome: ")
const estudo = prompt("Insira sua área de estudo: ")
const nascimento = prompt("Insira o ano de nascimento: ")

alert (
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo: " + estudo +
    "\nIdade: " + (2024 - nascimento)
)