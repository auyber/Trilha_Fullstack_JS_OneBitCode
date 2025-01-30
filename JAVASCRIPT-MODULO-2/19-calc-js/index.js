const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

//array com todas os caracteres permitidos
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//funcionalidade dos botões da calculadora
document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

//funcionalidade de limpar e deixar em foco no input
document.getElementById('clear').addEventListener('click', function (){
    input.value = ''
    input.focus()
})

//validar se a tecla do teclado do usuário é valida
input.addEventListener('keydown', function (ev){
    ev.preventDefault() //prevenir que a função tenha seu comportamento padrão
    if (allowedKeys.includes(ev.key)) {//verifica se a tecla está incluida no array de teclas válidas
        input.value += ev.key //retorna o valor da tecla
        return
    }
    if (ev.key === 'Backspace') { //criamos a funcionalidade do backspace
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {//funcionalidade do enter, irá calcular
        calculate()
    }
})

function calculate() {

}

