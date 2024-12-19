const imovel = []
let opcao = ""

do {
    opcao = prompt ("Bem vindo ao Cadastro de Imóveis!\n" +
    "\nImóveis Cadastrados: " + imovel.length + 
    "\n------------" + 
    "\nEscolha uma opção abaixo: " +
    "\n1 - Adicionar um imóvel" + 
    "\n2 - Monstrar imóveis" +
    "\n3 - Sair")

    switch (opcao){
        case "1":
            const novoImovel = {}

            novoImovel.proprietario = prompt ("Qual o nome do proprietário do Imóvel? ")
            novoImovel.quartos = prompt ("Qual é a quantidade de quartos? ")
            novoImovel.banheiros = prompt ("Qual é a quantidade de banheiros ?" )
            novoImovel.garagem = prompt ("O imovél possui garagem? (Sim/Não)")

            const confirmacao = confirm (
                "Salvar este imóvel?\n" +
                "\nProprietário do Imovél: " + novoImovel.proprietario +
                "\nQuartos: " + novoImovel.quartos +
                "\nBanheiros: " + novoImovel.banheiros +
                "\nPossui garagem? " + novoImovel.garagem
            )

            if (confirmacao) {
                novoImovel.push(imovel)
            }
            break

        case "2":
            for (let i = 0; i < imovel.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imovel[i].proprietario +
                    "\nQuartos: " + imovel[i].quartos +
                    "\nBanheiros: " + imovel[i].banheiros +
                    "\nPossui garagem? " + imovel[i].garagem
                )
            }
            break

        case "3":
            alert ("Saindo..")
            break
        default:
            alert ("Opção Inválida")
            break
    }

}while (opcao !== "3");