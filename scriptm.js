// INTERFACE INICIAL
let container = document.getElementById('container')

setTimeout(interface, 3)
let body = document.querySelector('body')


let contColors = document.getElementById('contColors')
function genius(){
  let btnAzul = document.createElement('div')
  btnAzul.id = 'azul'
  let btnVermelho = document.createElement('div')
  btnVermelho.id = 'vermelho'
  let btnAmarelo = document.createElement('div')
  btnAmarelo.id = 'amarelo'
  let btnVerde = document.createElement('div')
  btnVerde.id = 'verde'
  let logoKenzie = document.createElement('div')
  logoKenzie.id = 'logoKenzie'
  let imgKenzie = document.createElement('img')
  imgKenzie.src = './src/logokenzie.png'

  contColors.appendChild(btnAzul)
  contColors.appendChild(btnVermelho)
  contColors.appendChild(btnAmarelo)
  contColors.appendChild(btnVerde)
  logoKenzie.appendChild(imgKenzie)
  contColors.appendChild(logoKenzie)

  const btnStart = document.createElement('button')
  btnStart.addEventListener('click', start)
  btnStart.id = 'btnStart'
  btnStart.innerText = 'START'
  container.appendChild(btnStart)

}

function createPlacar(){
  let placar = document.createElement("div")
  let titulo = document.createElement("h2")
  let scoreText = document.createElement("span")
  let scoreValor = document.createElement("span")
  let recordText = document.createElement("span")
  let recordValor = document.createElement("span")

  placar.id = "placar"
  scoreValor.id = "scoreAtual"
  recordValor.id = "recordAtual"

  titulo.innerText = "PLACAR"
  scoreText.innerText = "SCORE: "
  scoreValor.innerText = "0"
  recordText.innerText = "RECORD: "
  recordValor.innerText = "0"

  placar.appendChild(titulo)
  placar.appendChild(scoreText)
  placar.appendChild(scoreValor)
  placar.appendChild(recordText)
  placar.appendChild(recordValor)

  container.appendChild(placar)

}


function interface(){
  let welcome = document.getElementById('divWelcome')
  container.removeChild(welcome)
  genius()
  createPlacar()
}

/** div PLACAR
 *  span score
 *  span record
 * 
 */

function placar(){

}
