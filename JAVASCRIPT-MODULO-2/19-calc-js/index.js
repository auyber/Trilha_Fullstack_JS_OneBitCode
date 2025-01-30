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

//mostrar o valor do resultado, capturando o valor do input
document.getElementById('equal').addEventListener('click', calculate)

//sempre por padrão irá executar as 2 linhas de erro, caso o eval não de erro, ele remove essas 2 linhas padrões
function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

//alterar o item quando for copiado e dar funcionalidade de copiar
document.getElementById('copyToClipboard').addEventListener('click', function (ev){
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})
//alterando o tema, pegando itens do css
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})
