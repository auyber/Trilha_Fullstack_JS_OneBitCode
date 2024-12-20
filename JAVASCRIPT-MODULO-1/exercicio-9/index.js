let opcao = ""
let base, altura, area, base_maior, base_menor, raio

function areaTriangular (base, altura) {
    return (base * altura) / 2
}

function areaRetangular (base, altura) {
    return base * altura
}

function areaQuadrada (base) {
    return base * base
}

function areaTrapezio (base_maior, base_menor, altura) {
    return (base_maior + base_menor) * altura / 2
}

function areaCirculo (raio) {
    return 3.14 * raio * raio
}

do {
    opcao = prompt ("Calduladora Geométrica\n" +
        "\nEscolha uma opção abaixo:" +
        "\n1 - Calcular área do triângulo" +
        "\n2 - Calcular área do retângulo" +
        "\n3 - Calcular área do quadrado" +
        "\n4 - Calcular área do trapézio" +
        "\n5 - Calcular área do círculo" +
        "\n6 - Sair"
    )

    switch (opcao) {
        case "1":
            base = parseFloat(prompt ("Digite a base do triângulo: "))
            altura = parseFloat(prompt ("Digite a altura do triângulo: "))
            area = areaTriangular(base, altura)
            alert ("A área do triângulo é: " + area)
            break

        case "2":
            base = parseFloat(prompt ("Digite a base do retângulo: "))
            altura = parseFloat(prompt ("Digite a altura do retângulo: "))
            area = areaRetangular(base, altura)
            alert ("A área do retângulo é: " + area)
            break

        case "3":
            base = parseFloat(prompt ("Digite o lado do quadrado: "))
            area = areaQuadrada(base)
            alert ("A área do quadrado é: " + area)
            break    

        case "4":
            base_maior = parseFloat(prompt ("Digite a base maior do trapézio: "))
            base_menor = parseFloat(prompt ("Digite a base menor do trapézio: "))
            altura = parseFloat(prompt ("Digite a altura do trapézio: "))
            area = areaTrapezio(base_maior, base_menor, altura)
            alert ("A área do trapézio é: " + area)
            break

        case "5":
            raio = parseFloat(prompt ("Digite o raio do círculo: "))
            area = areaCirculo(raio)
            alert ("A área do círculo é: " + area)
            break

        case "6":
            alert("Saindo...")
            break

            default:
            alert("Opção inválida!")
            break

    }           
} while (opcao !== "6");