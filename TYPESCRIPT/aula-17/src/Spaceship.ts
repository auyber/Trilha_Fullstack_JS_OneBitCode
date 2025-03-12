//COMO SERIA EM JS:

/*class Spaceship {
  constructor(name, captain) {
    this.name = name
    this.captain = captain
    this.speed = 0
  }

  accelerate(rate, time) {
    this.speed = rate * time
  }
}
  
class Fighter extends Spaceship {
    constructor(name, captain, weapons) {
      super(name, captain)
      this.weapons = weapons
    }
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }*/

//Para criar os atributos basta declará-los no início da classe. Repare que mesmo que excluíssemos o construtor os atributos ainda existiriam (diferente do comportamento no JS)

//**Obs².: Para declarar atributos não utilizamos var, const ou let**

class Spaceship {
  private name: string //só pode ser acessada na própria classe
  protected captain: string //só pode ser acessada na própria classe ou sublcasses
  protected speed: number

    constructor(name: string, captain: string) {
      this.name = name
      this.captain = captain
      this.speed = 0
    }
  
    public accelerate(rate:number, time:number) { //publico é visivel em qualquer lugar
      this.speed = rate * time
    }
  }
  
  class Fighter extends Spaceship {
    weapons

    constructor(name: string, captain: string, weapons: number) {
      super(name, captain)
      this.weapons = weapons
    }
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }
  
    erase() {
      this.captain = ''
    }
  }
  
  let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
  
  ship.accelerate(50, 10)