let listaRandom = []; //lista Ramdomizada que vai piscar na tela
let listaClicada = [];
const cores = ["verde", "vermelho", "amarelo", "azul"]
let isClickable = false
let score = 0
let record = 0

// INTERFACE INICIAL
let container = document.getElementById('container')

setTimeout(interface, 3000)
//setTimeout(splash, 99999)

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
  imgKenzie.src = './img/logoKenzie.png'

  contColors.appendChild(btnVerde)
  contColors.appendChild(btnVermelho)
  contColors.appendChild(btnAmarelo)
  contColors.appendChild(btnAzul)
  logoKenzie.appendChild(imgKenzie)
  contColors.appendChild(logoKenzie)
  
}

function startButton(){
    const btnStart = document.createElement('button')
    btnStart.id = 'btnStart'
    btnStart.innerText = 'START'
    container.appendChild(btnStart)
    btnStart.addEventListener("click", start)
}

function instructions(){
    let textBox = document.getElementById("textBox")
    let text = document.createElement("p")
    text.id = "text"
    text.innerText = "CLIQUE NO BOTÃO 'START' PARA COMEÇAR"
    textBox.appendChild(text)
}

function interface(){
  let welcome = document.getElementById('divWelcome')
  welcome.parentElement.removeChild(welcome)
  contColors.innerHTML = ''
  instructions()
  genius()
  startButton()
  createPlacar()
  
}

function start(){
    btnStart.innerText = "RESTART"
    listaRandom = []
    listaClicada = []
    if(score > record){
        record = score
        let recordAtual = document.getElementById("recordAtual")
        recordAtual.innerText = record
    }
    score = 0
    let scoreAtual = document.getElementById("scoreAtual")
    scoreAtual.innerText = score + ""

    let text = document.getElementById("text")
    text.innerText = "MEMORIZE A SEQUENCIA!"
    
    contColors.innerHTML = ''
    genius()
    piscar()
}

function getRndInteger(min, max) {
    //GERADOR DE NUMEROS ALEATORIOS
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function piscar(){

    let num = getRndInteger(0, 4)
    listaRandom.push(num)
    
    let myInterval = setInterval(piscarListaRandom, 450, listaRandom)
    let i = 0
    function piscarListaRandom(lista){
        if(i === lista.length - 1){
            clearInterval(myInterval)
            setTimeout(() => {
                let text = document.getElementById("text")
                text.innerText = "CLIQUE NAS CORES NA ORDEM CORRETA"    
                isClickable = true
            }, 450)
            
        }
            let corPiscada = document.getElementById(cores[listaRandom[i]])
            corPiscada.classList.toggle(cores[listaRandom[i]] + "Pisca")
            i++
            setTimeout(() => {corPiscada.classList.toggle(cores[listaRandom[i - 1]] + "Pisca")}, 400)
        } 

}


//const contColors = document.getElementById("contColors")

contColors.addEventListener("click", verificarClique)

function verificarClique(event){
    
    /* Só pode aceitar o clique quando for a hora do 
    usuario clicar!!

    verifica onde clicou, pega o id de onde clicou,
    transforma o nome da cor em numero(0 - 3)
    (podemos usar cores.indexOf(id) para fazer essa
    conversão) e faz um push no array de botoes clicados. */

    if(isClickable && cores.includes(event.target.id)){
        isClickable = false
        listaClicada.push(cores.indexOf(event.target.id))

        if(compararCores() && listaRandom.length === listaClicada.length){
            //O PLAYER ACERTOU A RODADA
            listaClicada = []
            score++
            let scoreAtual = document.getElementById("scoreAtual")
            scoreAtual.innerText = score + ""

            let text = document.getElementById("text")
            text.innerText = "MUITO BEM! MEMORIZE NOVAMENTE!"    
            isClickable = true
            piscar()
        }else if (compararCores()){
            //O PLAYER ACERTOU A COR MAS AINDA FALTA CORES
            //PARA CLICAR, ENTAO CONTINUA A LER SEM FAZER NADA
            isClickable = true
        }else if (!compararCores()){
            //O PLAYER ERROU!
            alert("Ops.. That was not a good idea!")
            let text = document.getElementById("text")
            text.innerText = "QUE PENA! VOCÊ ERROU! CLIQUE EM START SE QUISER JOGAR NOVAMENTE!"    
            isClickable = true
            if(score > record){
                record = score
                let recordAtual = document.getElementById("recordAtual")
                recordAtual.innerText = record
            }
            score = 0
            let scoreAtual = document.getElementById("scoreAtual")
            scoreAtual.innerText = score + ""
            btnStart.innerText = "START"
        }
    }
   
}

function compararCores(){
    for(let j = 0; j < listaClicada.length; j++){
        if(listaRandom[j] !== listaClicada[j]){
            return false
        }
    }
    return true
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
    scoreValor.innerText = score + ""
    recordText.innerText = "RECORD: "
    recordValor.innerText = record + ""
  
    placar.appendChild(titulo)
    placar.appendChild(scoreText)
    placar.appendChild(scoreValor)
    placar.appendChild(recordText)
    placar.appendChild(recordValor)
  
    container.appendChild(placar)
  
  }