let saldo
let adicionar
let remover

saldo = parseFloat(prompt("Qual a quantia disponível de R$: "))

do {
    menu = prompt("Seu saldo é de R$: " + saldo +
        "\n1- Adicionar dinheiro" +
        "\n2- remover dinheiro" +
        "\n3- sair");

    if (menu == "1"){
        adicionar = parseFloat(prompt("Qual a quantia a ser adicionada? "))
        saldo += adicionar
    } else if (menu == "2"){
        remover = parseFloat(prompt("Qual quantia deseja remover? "))
        saldo -= remover
    //não pediu no exercício, porém fiz uma opção caso a pessoa escolha algo inválido    
    } else if (menu !== "3"){
        alert("Escolha uma opção válida")
    }

} while (menu !== "3");

alert("Encerrando sessão...");
