/*
  Auto clicker simples usando robotjs.
  - Clica alternando entre (722,830) e (699,830).
  - Pressione "s" no terminal para parar (ou Ctrl+C).
*/

let robot
try {
    robot = require('robotjs')
} catch (err) {
    console.error('Erro ao carregar robotjs. Instale com: npm install robotjs')
    process.exit(1)
}

const pos1 = { x: 722, y: 830 }
const pos2 = { x: 699, y: 830 }
const intervalMs = 200 // intervalo entre cliques (ms)

let toggle = 0
console.log('Auto clicker iniciado. Pressione "s" no terminal para parar. (Ctrl+C para forçar saída)')

const timer = setInterval(() => {
    const p = toggle === 0 ? pos1 : pos2
    robot.moveMouseSmooth(p.x, p.y)
    robot.mouseClick('left')
    toggle = 1 - toggle
}, intervalMs)

// captura tecla no terminal para parar (terminal deve estar com foco)
process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.on('data', (key) => {
    // Ctrl+C
    if (key.length === 1 && key[0] === 3) process.exit()
    // tecla 's' para stop
    if (key.toString() === 's') {
        clearInterval(timer)
        console.log('Auto clicker parado.')
        process.exit(0)
    }
})