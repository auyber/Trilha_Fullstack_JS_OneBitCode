let n1 = parseFloat(prompt("Digite o primeiro número: "))
let n2 = parseFloat(prompt("Digite o segundo número: "))

let soma = n1 + n2
let subtracao = n1 - n2
let multiplicacao = n1 * n2
let divisao = n1 / n2

alert(
    "A soma de " + n1 + " + " + n2 + " = " + soma +
    "\nA subtração de " + n1 + " - " + n2 + " = " + subtracao +
    "\nA multiplicação de " + n1 + " * " + n2 + " = " + multiplicacao +
    "\nA divisão de " + n1 + " / " + n2 + " = " + divisao
)

//código sugerido:
/*
let n1 = parseFloat(prompt("Digite o primeiro número: "))
let n2 = parseFloat(prompt("Digite o segundo número: "))


//verifica se as entradas são números válidos
if (isNaN(n1) || isNaN(n2)) {
    alert("Entrada inválida. Digite números válidos.")
} else {
    let soma = n1 + n2
    let subtracao = n1 - n2
    let multiplicacao = n1 * n2
    let divisao = n2 !== 0 ? n1 / n2 : "∞ (divisão por zero)" //tratamento para divisão por zero

    alert(
        "A soma de " + n1 + " + " + n2 + " = " + soma +
        "\nA subtração de " + n1 + " - " + n2 + " = " + subtracao +
        "\nA multiplicação de " + n1 + " * " + n2 + " = " + multiplicacao +
        "\nA divisão de " + n1 + " / " + n2 + " = " + divisao
    )
}
*/