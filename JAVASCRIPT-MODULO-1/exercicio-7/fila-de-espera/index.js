const filaDeEspera = []
let novoPaciente = ""

do {
let fila = prompt("Escolha uma opção abaixo: " + "\n1 - Novo Paciente"
+ "\n2 - Consultar Paciente"
+ "\n3 - Sair")

switch (fila) {
    case "1":
        novoPaciente = prompt("Digite o nome do novo paciente: ")
        filaDeEspera.push(novoPaciente)

        console.log(fila)
        console.log(filaDeEspera)
}

}while(fila !== 3)
    