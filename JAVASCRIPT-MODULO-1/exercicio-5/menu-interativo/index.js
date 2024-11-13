let menu;

do {
    menu = prompt("Escolha uma das opções abaixo: " +
        "\n1- MC" +
        "\n2- BK" +
        "\n3- SB" +
        "\n4- HB" +
        "\n5- Encerrar"
    );

    if (menu == "1"){
        alert("Você escolheu MC")
    } else if (menu == "2"){
        alert("Você escolheu BK")
    } else if (menu == "3"){
        alert("Você escolheu SB")            
    } else if (menu == "4"){
        alert("Você escolheu HB")
    }

} while (menu !== "5"){
    alert("O sistema está sendo encerrado...")
}