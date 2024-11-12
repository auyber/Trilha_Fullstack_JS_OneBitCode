/*const veiculo1 = prompt("Qual a velocidade do veículo 1: ")
const veiculo2 = prompt("Qual a velocidade do veículo 2: ")

if (veiculo1 > veiculo2) {
    alert("Veículo 1 é mais rápido")
} else if (veiculo1 < veiculo2) {
    alert("Veículo 2 é mais rápido")
} */

//Resolução

const veiculo1 = prompt("Informe o nome do primeiro veículo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo:"))

const veiculo2 = prompt("Informe o nome do segundo veículo:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
    } else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " é mais rápido do que " + veiculo1)
    } else {
    alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.")
    }