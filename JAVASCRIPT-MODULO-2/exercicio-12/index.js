const form = document.getElementById('cadastroForm')
const devs = []

document.getElementById('tecnologiaBtn').addEventListener('click', function (ev){
    ev.preventDefault()

    //para facilitar a remoção da tecnologia, criamos um contêiner
    const tecnologiaDiv = document.createElement('div')

    //campo de texto para o nome da tecnologia
    const tecnologiaLabel = document.createElement('label')
    tecnologiaLabel.innerText = 'Nome da Tecnologia: '
    const tecnologiaInput = document.createElement('input')
    tecnologiaInput.type = 'Text'
    tecnologiaInput.name = 'tecnologia'
    tecnologiaDiv.appendChild(document.createElement('br'))
    tecnologiaDiv.append(tecnologiaLabel, tecnologiaInput)
    
    //um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    const experienciaLabel = document.createElement('label')
    experienciaLabel.innerText = 'Experiência: '
    experienciaLabel.name = 'main'
    tecnologiaDiv.appendChild(document.createElement('br'))
    tecnologiaDiv.append(experienciaLabel)

    const experiencia_0_2_input = document.createElement('input')
    experiencia_0_2_input.type = 'radio'
    experiencia_0_2_input.name = 'main'
    experiencia_0_2_input.value = '0-2 anos'

    const experiencia_0_2_label = document.createElement('label')
    experiencia_0_2_label.innerText = '0 - 2 anos'
    tecnologiaDiv.append(experiencia_0_2_input, experiencia_0_2_label)

    const experiencia_3_4_input = document.createElement('input')
    experiencia_3_4_input.type = 'radio'
    experiencia_3_4_input.name = 'main'
    experiencia_3_4_input.value = '3-4 anos'

    const experiencia_3_4_label = document.createElement('label')
    experiencia_3_4_label.innerText = '3 - 4 anos'
    tecnologiaDiv.append(experiencia_3_4_input, experiencia_3_4_label)

    const experiencia_5_input = document.createElement('input')
    experiencia_5_input.type = 'radio'
    experiencia_5_input.name = 'main'
    experiencia_5_input.value = '5+ anos'

    const experiencia_5_label = document.createElement('label')
    experiencia_5_label.innerText = '5+ anos'
    tecnologiaDiv.append(experiencia_5_input, experiencia_5_label)

    //criar botão de remoção de habilidade
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'Remover'
    tecnologiaDiv.appendChild(document.createElement('br'))
    tecnologiaDiv.appendChild(document.createElement('br'))
    tecnologiaDiv.append(removeBtn)
    tecnologiaDiv.append(document.createElement('hr'))
    
    //remover a div inteira
    removeBtn.addEventListener('click', function(ev){
        ev.preventDefault()

        tecnologiaDiv.remove()
    })

    form.append(tecnologiaDiv)
})

document.getElementById('cadastraBtn').addEventListener('click', function(ev){
    
    ev.preventDefault()

    //capturar o nome do Dev
    const nome = document.querySelector("input[name='nome']").value

    //capturar as tecnologias e experiências
    const tecnologias = [] //criamos tecnologias com array vazio, pois podem ser várias divs de tecnologia com valores
    document.querySelectorAll('div').forEach(function(div){
        const tecnologia = div.querySelector("input[name='tecnologia']")?.value
        const experiencia = div.querySelector("input[type='radio']:checked")?.value
        if (tecnologia) {
            tecnologias.push({
                tecnologia,
                experiencia: experiencia || 'Não informado'
            })
        }
    })

    devs.push({ nome, tecnologias})

    form.reset()
    document.querySelectorAll("div").forEach(function(div){
        if (div.querySelector("input[name='tecnologia]")){
            div.remove()
        }
    })
})