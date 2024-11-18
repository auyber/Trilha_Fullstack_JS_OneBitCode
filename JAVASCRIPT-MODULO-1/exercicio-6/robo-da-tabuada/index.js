const numero = parseFloat(prompt("Insira um número de 1 a 20: "))

let resultado = ""

for (let i = 1; i <= 20; i++){
    resultado += " -> " + numero + " * " + i + " = " + (numero * i) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)