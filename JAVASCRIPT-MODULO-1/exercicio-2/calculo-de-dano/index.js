const nome = prompt("Qual seu nome?")
const ataque1 = prompt("Qual seu poder de ataque?")

const nome2 = prompt("Qual nome do seu inimigo?")
const vida = prompt("Qual a vida do inimigo?")
const defesa = prompt("Qual a defesa do inimigo?")
const escudo = prompt("O inimigo tem escudo?")

if (ataque1 > defesa && escudo == "não") {
    alert("Dano causado: " + defesa - ataque1)
} else if(ataque1 > defesa && escudo =="sim") {
    alert("Dano causado: " + (defesa - ataque1)/2)
} else (ataque1 < defesa){
    alert("Dano causado: 0")
}

alert()