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
    );
}

function VagasDisponiveis() {
    if (dados.length === 0) {
        alert("Nenhuma vaga disponível.");
    } else {
        let lista = "";
        for (let i = 0; i < dados.length; i++) {
            let vaga = dados[i];
            lista += (i + 1) + "." + vaga.nome + " (" + vaga.candidato.length + " candidatos)\n";
        }
        alert("Vagas disponíveis:\n" + lista);
    }
}

function CriarNovaVaga() {
    const vaga = {
        nome: prompt ("Informe um nome para a vaga: "),
        descricao: prompt ("Informe uma descrição para a vaga: "),
        limite: prompt ("Informe a data (xx/xx/xxxx) limite para inscrição da vaga: "),
        candidato: [] // inicializa sem candidatos inscritos
    }

    const confirma = confirm(
        "Deseja salvar esta vaga?\n" +
        "\nNome da vaga: " + vaga.nome +
        "\nDescrição da vaga: " + vaga.descricao +
        "\nLimite da vaga: " + vaga.limite
    );

    if (confirma) {
        dados.push(vaga);
        alert("Vaga criada com sucesso!");
    }
}

function VisualizarVaga() {
    let indice = parseInt(prompt("Informe o índice da vaga: ")) - 1;

    if (indice >= 0 && indice < dados.length) {
        let vaga = dados[indice];

        //Verifica se há candidatos inscritos
        let listaCandidatos = vaga.candidato.length > 0
            ? vaga.candidato.join(", ")
            : "Nenhum candidato inscrito.";

        alert(
            "Vaga " + (indice + 1) + ":\n" +
            "Nome: " + vaga.nome + "\n" +
            "Descrição: " + vaga.descricao + "\n" +
            "Data Limite para inscrição: " + vaga.limite + "\n" +
            "Quantidade de candidatos inscritos: " + vaga.candidato.length + "\n" +
            "Candidatos: " + listaCandidatos
        );
    } else {
        alert("Índice inválido.");
    }
}

function InscreverCandidato() {
    let nomeCandidato = prompt ("Insira o nome do candidato: ");
    let indice = parseInt(prompt("Informe o índice da vaga: ")) - 1;

    if (indice >= 0 && indice < dados.length) {
        let vaga = dados[indice];
        let confirma = confirm(
            "Deseja inscrever " + nomeCandidato + " na vaga?\n" +
            "Nome da vaga: " + vaga.nome + "\n" +
            "Descrição: " + vaga.descricao + "\n" +
            "Data Limite: " + vaga.limite + "\n"
        );

        if (confirma) {
            vaga.candidato.push(nomeCandidato)
            alert("Candidato inscrito com sucesso!");
        }
    } else {
        alert("Índice inválido.");
    }
}

function ExcluirVaga() {
    let indice = parseInt(prompt("Informe o índice da vaga: ")) - 1;

    if (indice >= 0 && indice < dados.length) {
        let vaga = dados[indice];
        let confirma = confirm(
            "Desea realmente excluir a vaga?\n" +
            "Nome: " + vaga.nome + "\n" +
            "Descrição: " + vaga.descricao + "\n"
        );

        if(confirma) {
            dados.splice(indice, 1);
            alert("Vaga excluída com sucesso!");
        }
    } else {
        alert("Índice inválido");
    }
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