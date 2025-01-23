function addJogador() {
    const EscalacaoSection = document.getElementById('escalacao-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Escalar Jogador'

    const ul = document.createElement('ul')

    const posicaoLi = document.createElement('li')
    posicaoLi.innerText = 'Posição: '
    const posicaoInput = document.createElement('input')
    posicaoInput.type = 'text'
    posicaoInput.name = 'posicao'
    posicaoLi.appendChild(posicaoInput)
    ul.appendChild(posicaoLi)
    ul.appendChild(document.createElement('br'))

    const jogadorLi = document.createElement('li')
    jogadorLi.innerText = 'Jogador: '
    const jogadorInput = document.createElement('input')
    jogadorInput.type = 'text'
    jogadorInput.name = 'jogador'
    jogadorLi.appendChild(jogadorInput)
    ul.appendChild(jogadorLi)
    ul.appendChild(document.createElement('br'))

    const numeroLi = document.createElement('li')
    numeroLi.innerText = 'Número: '
    const numeroInput = document.createElement('input')
    numeroInput.type = 'text'
    numeroInput.name = 'numero'
    numeroLi.appendChild(numeroInput)
    ul.appendChild(numeroLi)
    ul.appendChild(document.createElement('br'))

    // Adicionando botão
    const escalarBt = document.createElement('button')
    escalarBt.innerText = 'Escalar'

    // Adicionando evento de clique
    escalarBt.addEventListener('click', function(){
        const posicao = posicaoInput.value;
        const jogador = jogadorInput.value;
        const numero = numeroInput.value;

        // Confirmação do usuário
        const confirmacao = confirm('Confirmar escalação do jogador?\n' + 
            'Posição: ' + posicao + '\n' +
            'Jogador: ' + jogador + '\n' +
            'Número: ' + numero)

        if (confirmacao){
            //Inserir na lista de escalação
            const lista = document.getElementById('escalacao-final')
            const item = document.createElement('li')
            item.innerText = 'Posição: ' + posicao + ', Jogador: ' + jogador + ', Número: ' + numero
            lista.appendChild(item)

            //limpar os campos de input
            posicaoInput.value = ''
            jogadorInput.value = ''
            numeroInput.value = ''
        }


    })

    ul.appendChild(escalarBt)

    EscalacaoSection.append(h3, ul)
}

function removeJogador() {
    const EscalacaoSection = document.getElementById('escalacao-final')

    //Obter o número do jogador que será removido
    const numeroInput = prompt('Digite o número da camisa do jogador que será removido')

    //Econtrar o item na lista
    const itens = EscalacaoSection.getElementsByTagName('li')

    let jogadorRemovido = false;

    for(let i = 0; i < itens.length; i++) {
        if (itens[i].innerText.includes('Número: ' + numeroInput)){
            EscalacaoSection.removeChild(itens[i])
            jogadorRemovido = true;
            break
        }
    }

    if (!jogadorRemovido) {
        alert('Jogador não encontrado.')
    }
}