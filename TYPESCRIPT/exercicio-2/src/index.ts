//Declarando os Tipos

type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PlanetCoodinates = [number, number, number, number] //uma tupla que aceita só 4 numeros

type Planet = { //um tipo, que é um objeto
    name: string
    coordinates: PlanetCoodinates
    situation: PlanetSituation
    satellites: string [] //como irá receber o satelites só depois, iniciamos com um array vazio
}

//Funções Principais

// Aqui tiramos vantagem do Alias para manipularmos
// mais precisamente nosso array de planetas
const planets: Planet[] = [] //planets é um tipo de planet, array de planetas que iremos salvar posteriormente

function addPlanet(name: string, coordinates: PlanetCoodinates, situation: PlanetSituation) {
    // Repare que agora o autocompletar consegue nos
    // sugerir as propriedades mesmo dentro da função
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert (`O planeta ${name} foi registrado com sucesso.`)
}

function findPlanet(name: string) {
    const planet = planets.find(planet => planet.name === name)

    // Utilizando o operador nullish coalescing podemos
    // garantir que nosso retorno será um tipo Union
    return planet ?? false //A expressão return planet ?? false utiliza o operador de coalescência nula (??). Esse operador retorna o lado esquerdo se ele não for null ou undefined; caso contrário, retorna o lado direito.
}

// Graças ao Alias a anotação de tipos nos
// argumentos da função fica bem mais enxuta
function updateSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`)
}

function addSatellite(name: string, planet: Planet) {
    planet.satellites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)
}

function removeSatellite(name: string, planet: Planet) {
    // Repare o quanto o autocompletar se torna inteligente
     // nesse caso apenas porque anotamos os tipos
    planet.satellites = planet.satellites.filter(satellite => satellite !== name) //Aqui filtramos os satelites que não quero, e retornamos todos que forem "!==" diferentes do nome do satélite que estamos removendo. É uma maneira de remover um item, poderiamos utilizar outras maneiras como encontrar o índice e depois remover.

    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`)
}

//Aplicando as funções auxiliares do menu

// Funções Auxiliares

function promptValidSituation() {
    let situation: PlanetSituation
    let validSituation = false //inicia como falso
  
    while (!validSituation) {
      const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado') //fica em loop até ter uma situação válida
  
      switch (situationInput) {
        case '1':
          situation = 'Habitado'
          validSituation = true
          break;
        case '2':
          situation = 'Habitável'
          validSituation = true
          break;
        case '3':
          situation = 'Inabitável'
          validSituation = true
          break;
        case '4':
          situation = 'Inexplorado'
          validSituation = true
          break;
        default:
          alert('Situação inválida!')
          break;
      }
    }
  
    return situation
  }

  //Repare que usaremos estratégias diferentes em cada uma das funções, a primeira retornando diretamente o resultado, já a segunda receberá uma função de callback para lidar com o resultado. Seus usos são apenas para ilustrar as possibilidades e vantagens do typescript e exercitar nosso raciocínio.

  // Aqui anotamos os tipos da função callback
// para facilitar a sua implementação futura
function promptValidPlanet(callback: (planet: Planet) => void) {
    const planetName = prompt('Informe o nome do planeta:')
    const planet = findPlanet(planetName)
    
    // Aqui podemos reparar que o VS Code nos
    // avisa sobre o tipo Union de planet
  if (planet) {
    callback(planet)
  } else {
    alert('Planeta não encontrado! Retornando ao menu...')
  }
}

// Opções do Menu

function firstMenuOption() {
    const name = prompt('Informe o nome do planeta:')
    const coordinateA = Number(prompt('Informe a primeira coordenada:'))
    const coordinateB = Number(prompt('Informe a segunda coordenada:'))
    const coordinateC = Number(prompt('Informe a terceira coordenada:'))
    const coordinateD = Number(prompt('Informe a quarta coordenada:'))
  
    // Aqui a nossa função ajuda a ter um código mais organizado
    const situation = promptValidSituation()
  
    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${situation}`)
  
    if (confirmation) {
      addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
    }
  }

  // Nessas três funções vemos como a nossa função de callback
// proporciona uma facilidade enorme na implementação
function secondMenuOption() {
    // Além disso temos acesso automático às informações
    // dos argumentos, nesse caso a variável planet
    promptValidPlanet(planet => {
      const situation = promptValidSituation()
      updateSituation(situation, planet)
    })
  }
  
  function thirdMenuOption() {
    promptValidPlanet(planet => {
      const satellite = prompt('Informe o nome do satélite a ser adicionado:')
      addSatellite(satellite, planet)
    })
  }
  
  function fourthMenuOption() {
    promptValidPlanet(planet => {
      const satellite = prompt('Informe o nome do satélite a ser removido:')
      removeSatellite(satellite, planet)
    })
  }

  function fifthMenuOption() {
    let list = 'Planetas:\n'
  
    planets.forEach(planet => {
      // Repare que as tuplas são uma forma fácil de permitir a
      // desestruturação com qualquer nome nas variáveis.
      // As variáveis a seguir podem ter qualquer nome pois a
      // tupla segue um padrão fixo.
      const [a, b, c, d] = planet.coordinates
  
      list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Satélites: ${planet.satellites.length}
      `
  
      planet.satellites.forEach(satellite => {
        list += `    - ${satellite}\n`
      })
    })
  
    alert(list)
  }

  // Menu

let userOption = 0

while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
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
      fifthMenuOption()
      break
    case 6:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}