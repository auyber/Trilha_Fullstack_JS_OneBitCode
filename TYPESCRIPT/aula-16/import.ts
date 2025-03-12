import { Spaceship } from "./export"
import * as lodash from 'lodash';
// Veja que esse alerta aparecerá ao passar o mouse sobre o 'lodash':
// Não foi possível localizar o arquivo de declaração para o módulo 'lodash'.
// Tente `npm i --save-dev @types/lodash` caso exista

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: "X-wing",
    pilot: "Grauber",
    speed: 999999,
    weapons: 50
}

// Além disso, se tentarmos usar o lodash
// ele não trará nenhuma sugestão no autocompletar
lodash.camelCase()

//Muitas bibliotecas não possuem nelas próprias as tipagens para o typescript. Porém, para resolver isso, existe um repositório mantido pela comunidade que possui as tipagens para essas bibliotecas. Siga a sugestão do VS Code e execute o comando abaixo:

console.log(lodash.camelCase(xwing.name))
console.log(lodash.kebabCase(xwing.pilot))