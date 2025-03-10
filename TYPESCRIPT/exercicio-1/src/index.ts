const spaceships = [] //array com escopo global, para armazenar todas naves que vamos salvar nas próximas funções

// Função para adicionar uma nave
function addSpaceship(name: string, pilot: string, crewLimit: number) { //declaramos os tipos no início para facilitar, e nos ajudar no decorrer do código
    const spaceship = { //objeto com propriedades
        name,
        pilot,
        crewLimit,
        crew: [], //array para armazenar a crew name
        inMission: false
    }

    spaceships.push(spaceship) //envia a nave ao array global

    alert(`A nave ${spaceship.name} foi registrada.`)
}

//função para econtrar uma nave
function findSpaceship(name: string) {
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string [],
        inMission: boolean
    }

    spaceship = spaceships.find(ship => ship.name === name)

    return spaceship
}

//função para adicionar um mebro
function addCrewMember(member: string, spaceship: { name: string, crewLimit: number, crew: string[]}) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado. Limite atingido.`)
    } else {
        alert(`${member} foi adicionado à tripulação da ${spaceship.name}`)
    }
}

//função para enviar em missão
function sendInMission(spaceship: { name: string, crewLimit: number, crew: string[], inMission: boolean}) {
    if (spaceship.inMission) {
        alert(`${spaceship} não pode ser enviada. Nave já em missão`)
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) { //usamos o Math.floor para arrendondar para baixo. e o / 3 é porque a nave só pode ser enviada com no minimo 1/3 de tripulação
        alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente`)
    } else {
        spaceship.inMission = true

        alert(`${spaceship.name} enviada para a missão`)
    }
}

//funções para cada opção do menu
//opção 1
function firstMenuOption() {
    const name = prompt('Qual é o nome da nave a ser registrada?')
    const pilot = prompt(`Qual é o nome do piloto da ${name}`)
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name}) suporta?`)

    const confirmation = confirm(`Confirma o registro da nave ${name}\nPiloto: ${pilot}\nLimite da tripulação: ${crewLimit}`)

    if (confirmation) {
        addSpaceship(name, pilot, crewLimit)
    }
}

//opção 2
function secondMenuOption() {
    const member = prompt(`Qual é o nome do tripulante`)
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`)

    const spaceship = findSpaceship(spaceshipName)

    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`)

        if (confirmation) {
            addCrewMember(member, spaceship)
        }
    }
}

//opção 3
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')

    const spaceship = findSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Confirma o envio da ${spaceship.name} na missão?`)

        if (confirmation) {
            sendInMission(spaceship)
        }
    }
}

//opção 4
function fourthMenuOption() {
    let list = 'Naves Registradas:\n'

    spaceships.forEach((spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }) => {
        list += `
            Nave: ${spaceship.name}
            Piloto: ${spaceship.pilot}
            Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
            Tamanho Máximo da Tripulação: ${spaceship.crewLimit}
            Tripulantes: ${spaceship.crew.length}
        `

        spaceship.crew.forEach(member => {
            list += `   - ${member}`
        })
    })

    alert(list)
}

//implementar o Menu
let userOption = 0;

while (userOption !== 5) {
  const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
      secondMenuOption()
      break
    case 3:
      thirdMenuOption()
      break
    case 4:
      fourthMenuOption()
      break
    case 5:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}