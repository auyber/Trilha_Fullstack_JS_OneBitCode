// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante

// Criação de uma interface
interface CelestialBody {
    name: string
    mass: number
  }
  
  // Interfaces podem ser herdadas ou herdar umas às outras
  interface Star extends CelestialBody {
    age: number
    planets: Planet[]
  }
  
  interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
  }
  
  let sun: Star = {
    name: "Sol",
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
  }

  // Classes podem implementar interfaces
// Nesse caso ela cria o que chamamos de contrato,
// pois obriga a classe a implementar tudo o que
// foi definido na interface
class MilkyWayPlanet implements Planet {
    // Em typescript precisamos explicitar os atributos da classe dessa forma
    // Veremos mais sobre isso posteriormente
    name: string
    mass: number
    population: number
  
    constructor(name: string, mass: number, population: number) {
      this.name = name
      this.mass = mass
      this.population = population
    }
  
    createSatellite(name: string) {
      // ...
    }
  }

  // Aliases também podem usar herança mas com uma
// sintaxe um pouco diferente (e mais estranha)
type Asteroid = CelestialBody & {
    size: number
  }
  
  // O mesmo é válido para implementação usando um Type de objeto
  class BigAsteroid implements Asteroid {
    name: string
    mass: number
    size: number
  
    constructor(name: string, mass: number, size: number) {
      this.name = name
      this.mass = mass
      this.size = size
    }
  }

  // Apesar de serem poucas, existem diferenças entre Types e Interfaces

// Uma delas é a possibilidade de adicionar mais
// propriedades definindo novamente a mesma interface
interface Planet {
    orbitedStar: Star
  }
  
  let earth: Planet = {
    name: "Terra",
    mass: 5.972 * Math.pow(10, 24),
    population: 8000000000,
    createSatellite: (name: string) => {
      // ...
    },
    orbitedStar: sun
  }
  
  // O mesmo não é possível com Types
  // O código abaixo gera um erro
  type Planet = {
    satellites: string[]
  }

  var sun = {
    name: "Sol",
    mass: 1.989 * (Math.pow(10, 30)),
    age: 4.603 * (Math.pow(10, 9)),
    planets: []
};
var MilkyWayPlanet = /** @class */ (function () {
    function MilkyWayPlanet(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    MilkyWayPlanet.prototype.createSatellite = function (name) {
        // ...
    };
    return MilkyWayPlanet;
}());
var BigAsteroid = /** @class */ (function () {
    function BigAsteroid(name, mass, size) {
        this.name = name;
        this.mass = mass;
        this.size = size;
    }
    return BigAsteroid;
}());