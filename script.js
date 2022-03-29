let listaRandom = [] //lista Ramdomizada que vai piscar na tela
let listaClicada = []
const cores = ["verde", "vermelho", "amarelo", "azul"]
let isClickable = false

const startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click", start)

function start(){
    startBtn.innerText = "RESTART"
    listaRandom = []
    listaClicada = []

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
        }
            let corPiscada = document.getElementById(cores[listaRandom[i]])
            corPiscada.classList.toggle(cores[listaRandom[i]] + "Pisca")
            i++
            setTimeout(() => {corPiscada.classList.toggle(cores[listaRandom[i - 1]] + "Pisca")}, 400)
        }  
        
        isClickable = true
}




const container = document.getElementById("container")

container.addEventListener("click", verificarClique)

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
            piscar()
        }else if (compararCores()){
            //O PLAYER ACERTOU A COR MAS AINDA FALTA CORES
            //PARA CLICAR, ENTAO CONTINUA A LER SEM FAZER NADA
            isClickable = true
        }else if (!compararCores()){
            //O PLAYER ERROU!
            alert("voce errou")
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

