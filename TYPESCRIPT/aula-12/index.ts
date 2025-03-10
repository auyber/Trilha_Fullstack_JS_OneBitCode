// 1ª forma é tipos opcionais:
function sendSpaceship (spaceship: {pilot: string, copilot: string}) {
    //.... qualquuer lógica
}

sendSpaceship({pilot: 'Han Solo', copilot: 'Chubaka'})

sendSpaceship({pilot: 'Luke'})

// para evitar é só colocar o ? no copilot
function sendSpaceship (spaceship: {pilot: string, copilot?: string})

// Outra forma é o tipo unknown
let input: unknown

input = 'Test'
input = 20
input = []

let text: string

text = input //não podemos atribuir pois o input é unknown 
input = text //aqui pode pois ele pode receber outros tipos, só não pode ser atribuido a tipos especificos

//3 forma é o tipo any
let input: any //aqui é a forma mais radical, porque o TS para de funcionar. É como trabalhasse com JS normal. NÃO É MUITO RECOMENDADO

input = 'test'
input = 20
input = []

//temos outro tipo, não é especificamente para evitar tipagem. mas funciona parecido, ele é o never
function verification(test) {
    if (test) {

    } else {
        let _check: never
        return _check
    }
}

// o never serve para indicar que a variavel está errada, se tentar atribuir uma string, ou numero ao _check  (never), dará erro, porém podemos fazer o contrário, criar uma váriave e atribuir o _check a ela, ai podemos, e essa variavel nunca vai receber valor nenhum.