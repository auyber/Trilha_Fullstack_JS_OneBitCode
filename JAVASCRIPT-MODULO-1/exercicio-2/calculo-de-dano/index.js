/*const nome = prompt("Qual seu nome?")
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

alert()*/

//Resolução

const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
  } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
  }
  
  pontosDeVida -= danoCausado

  alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)