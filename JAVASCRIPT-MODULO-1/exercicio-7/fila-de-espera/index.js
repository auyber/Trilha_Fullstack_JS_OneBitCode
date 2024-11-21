const filaDeEspera = []
const indice = ""
const consultarPaciente = ""
let novoPaciente = ""
let fila = ""

do {
    fila = prompt("Lista dos Pacientes: " 
    + "\n" + filaDeEspera //código para trazer o índice do paciente 
    + "\nEscolha uma opção abaixo: " 
    + "\n1 - Novo Paciente"
    + "\n2 - Consultar Paciente"
    + "\n3 - Sair");

    if (fila == "1") {
        novoPaciente = prompt("Digite o nome do novo paciente: ")
        filaDeEspera.push(novoPaciente)
    }else if (fila == "2"){ //tirar o primeiro nome do array e mostrar
        consultarPaciente = filaDeEspera.shift()
        alert(consultarPaciente)
    }

}while(fila !== "3");

alert("Finalizando...");
    