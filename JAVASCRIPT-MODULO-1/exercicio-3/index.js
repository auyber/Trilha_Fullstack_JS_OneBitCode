const metros = prompt("Insira a medida em metros: ")
const conversor = prompt("Qual unidade de medida você quer converter o valor?\n 1- milímetro\n 2- centímetro\n 3- decímetro\n 4- decâmetro\n 5- hectômetro\n 6- quilômetro")

const medida = parseFloat(metros)
const resposta = parseFloat(conversor)
const milimetro = 1000
const centimetro = 100
const decimetro = 10
const decametro = 0.1
const hectometro = 0.01
const quilometro = 0.001

switch(resposta){
    case 1:
        alert(medida * milimetro)
        break
    case 2:
        alert(medida * centimetro)
        break
    case 3:
        alert(medida * decimetro)
        break
    case 4:
        alert(medida * decametro)
        break
    case 5:
        alert(medida * hectometro)
        break
    case 6:
        alert(medida * quilometro)
        break
    default:1
        alert("Comando inválido, escolha um número válido")
}