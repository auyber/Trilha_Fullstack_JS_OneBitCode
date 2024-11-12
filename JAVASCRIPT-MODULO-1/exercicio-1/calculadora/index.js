//prompt devolver o valor como string

entrada1 = prompt("Digite o primeiro número: ")
entrada2 = prompt("Digite o segundo número: ")

//usamos o parseFloat para transformar a string do valo x e y em número
const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divicao = x / y

alert(
    "Resultados:\n" + 
    "\nSoma: " + soma + 
    "\nSubtração: " + subtracao + 
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divicao
)