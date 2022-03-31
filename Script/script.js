function interface(){
    let welcome = document.getElementById('divWelcome')
    welcome.parentElement.removeChild(welcome)
    contColors.innerHTML = ''
  genius()
  instructions()
  info()
  startButton()
  createPlacar()
}

let body = document.querySelector('body')
const cores = ["verde", "vermelho", "amarelo", "azul"]
let listaRandom = []; //lista Ramdomizada que vai piscar na tela
let listaClicada = [];
let isClickable = false
let score = 0
let record = 0

// INTERFACE INICIAL
setTimeout(interface, 3000)
let container = document.getElementById('container')
let contColors = document.getElementById('contColors')
// GENIUS
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
  imgKenzie.src = '/src/img/logoKenzie.png'

  contColors.appendChild(btnVerde)
  contColors.appendChild(btnVermelho)
  contColors.appendChild(btnAmarelo)
  contColors.appendChild(btnAzul)
  logoKenzie.appendChild(imgKenzie)
  contColors.appendChild(logoKenzie)
  
}
// INICIAR O JOGO
function instructions(){ // Instruções
    let textBox = document.getElementById("textBox")
    let text = document.createElement("p")
    text.id = "text"
    text.innerText = "CLIQUE NO BOTÃO 'START' PARA COMEÇAR"
    textBox.appendChild(text)
}
function info(){ // informações
    let btn = document.createElement('button')
    let pop = document.createElement('div')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')

    p1.innerText = "Bem vindo ao Genius !"
    p2.innerText = "Pense rápido e tente repetir as sequências de sinais corretamente, a sequência ficará cada vez mais longa."
    p3.innerText = " Até onde consegue chegar ?     Lets Go !!"
    btn.innerText = "?"
    btn.className = "btnInfo"
    pop.className = "divPop"

    pop.appendChild(p1)
    pop.appendChild(p2)
    pop.appendChild(p3)
    container.appendChild(btn)
    container.appendChild(pop)

    btn.addEventListener('mouseover', () => {
        pop.style.display = "flex"
    })
    btn.addEventListener('mouseout', () => {
        pop.style.display = "none"
    })
}

function startButton(){ // Start
    const btnStart = document.createElement('button')
    btnStart.id = 'btnStart'
    btnStart.innerText = 'START'
    container.appendChild(btnStart)
    btnStart.addEventListener("click", start)
}
let startGame = 0
function start(){
    startGame = Date.now()
    console.log(startGame)
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
    
    
    setTimeout(() => {
        contColors.innerHTML = ''
        genius()
        piscar()
    }, 1000);
    
}
// CORES ALEATÓRIAS
function getRndInteger(min, max) {
    //GERADOR DE NUMEROS ALEATORIOS
    return Math.floor(Math.random() * (max - min) ) + min;
}
function piscar(){ // Ação nas cores
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

// VALIDAR CLICK   
contColors.addEventListener("click", verificarClique)
let stopGame = Date.now()
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
            scoreAtual.innerText = score 

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
            falhou()
        }
    }
   
}

// ERRANDO NO JOGO
function falhou(){
    stopGame = Date.now()
    let time = (stopGame -startGame) / 1000
    let timeValor = document.getElementById('timeValor')
    timeValor.innerText = `${time} seconds`
    
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
function compararCores(){
    for(let j = 0; j < listaClicada.length; j++){
        if(listaRandom[j] !== listaClicada[j]){
            return false
        }
    }
    return true
}

//PLACAR
function createPlacar(){
    let placar = document.createElement("div")
    let titulo = document.createElement("h2")
    let divScore = document.createElement('div')
    let scoreText = document.createElement("span")
    let scoreValor = document.createElement("span")
    let divRecord = document.createElement('div')
    let recordText = document.createElement("span")
    let recordValor = document.createElement("span")
    let divTime = document.createElement('div')
    let timeText = document.createElement("span")
    let timeValor = document.createElement("span")
    
  
    placar.id = "placar"
    divRecord.className = 'divResultPlacar'
    divScore.className = 'divResultPlacar'
    divTime.className = 'divResultPlacar'
    scoreValor.id = "scoreAtual"
    recordValor.id = "recordAtual"
    titulo.innerText = "PLACAR"
    scoreText.innerText = "SCORE: "
    scoreValor.innerText = score + ""
    recordText.innerText = "RECORD: "
    recordValor.innerText = record + ""
    timeText.innerText = "TIME"
    timeValor.innerText = 0
    timeValor.id = "timeValor"
    
  
  
    placar.appendChild(titulo)
    divScore.appendChild(scoreText)
    divScore.appendChild(scoreValor)
    placar.appendChild(divScore)
    divRecord.appendChild(recordText)
    divRecord.appendChild(recordValor)
    placar.appendChild(divRecord)
    divTime.appendChild(timeText)
    divTime.appendChild(timeValor)
    placar.appendChild(divTime)
    
    container.appendChild(placar)
  
  }
