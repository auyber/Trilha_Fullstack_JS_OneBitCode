//menu com:
// listar vagas disponíveis - deve mostrar indice, nome e quantidade de candidatos inscritos de todas as vagas
//criar uma nova vaga - deve pedir um nome para a vaga, uma descrição e data limite, tambem pedir que o usuário confirme as informações antes de salva-las
//visualizar uma vaga - deve pedir o indice da vaga e mostrar todas as informações dela: indice, nome, descrição, data limite, quantidade de candidatos e nome deles
//inscrever um candidato em uma vaga - pedir nome do candidadto, indide da vaga e uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga
//excluir uma vaga - deve pedir o indice da vaga, mostrat suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
//sair

//utilizar tudo do modulo, como objeto, arrays e funções



const dados = [] //inserir todos os dados das funções do menu

function exibirMenu() {
    return prompt(
        "Vagas de emprego\n" +
        "1. Vagas disponíveis\n" +
        "2. Criar nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    )
}

function VagasDisponiveis() {

}

function CriarNovaVaga() {
    const vaga = {}

    vaga.nome = prompt ("Informe um nome para a vaga: ")
    vaga.descricao = prompt ("Informe uma descrição para a vaga: ")
    vaga.limite = prompt ("Informe a data limite para inscrição da vaga: ")

    const confirma = confirm(
        "Deseja salvar esta vaga?\n" +
        "\nNome da vaga: " + vaga.nome +
        "\nDescrição da vaga: " + vaga.descricao +
        "\nLimite da vaga: " + vaga.limite
    )

    if (confirma) {
        dados.push(vaga)
    }
}

function VisualizarVaga() {
    for (let i = 0; i < dados.length; i++) {
        alert(
            "Vaga " + (i + 1) + //mostrar todas informações das vagas, buscando nos array
        )
    }
}

function InscreverCandidato() {
    // preciso perguntar os dados do usuário, o indice da vaga, creio que preciso armazenar em arrays
}

function ExcluirVaga() {

}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let escolha

        switch (opcao) {
            case "1":
                escolha = VagasDisponiveis()
                break
            case "2":
                escolha = CriarNovaVaga()
                break
            case "3":
                escolha = VisualizarVaga()
                break
            case "4":
                escolha = InscreverCandidato()
                break
            case "5":
                escolha = ExcluirVaga()
                break
            case "6":
                alert ("Saindo...")
                break
            default:
                alert ("Opção inválida!")
                break
        }

    } while (opcao !== "6");
}

executar()