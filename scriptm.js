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
  imgKenzie.src = '/img/logoKenzie.png'

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

function interface(){
  let welcome = document.getElementById('divWelcome')
  welcome.innerHTML= ''
  contColors.innerHTML = ''
  genius()
}

/** div PLACAR
 *  span score
 *  span record
 * 
 */

function placar(){

}
