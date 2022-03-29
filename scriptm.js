// INTERFACE INICIAL
let container = document.getElementById('container')
let btnStart = document.createElement('btnStart')
btnStart.innerText = "START"
btnStart.id = "btnStart"
//container.appendChild(btnStart)


setTimeout(interface, 3000)
let body = document.querySelector('body')
//body.addEventListener('click', () => {clearInterval(carregarInterface)})


function genius(){
  let contColors = document.getElementById('contColors')
  let btnAzul = document.createElement('div')
  btnAzul.id = 'btnAzul'
  let btnVermelho = document.createElement('div')
  btnVermelho.id = 'btnVermelho'
  let btnAmarelo = document.createElement('div')
  btnAmarelo.id = 'btnAmarelo'
  let btnVerde = document.createElement('div')
  btnVerde.id = 'btnVerde'
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

