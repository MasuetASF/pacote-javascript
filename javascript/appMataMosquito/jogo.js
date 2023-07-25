
// Definindo e limitando a area do escopo


//iniciando varaiveis
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

//recuperando nivel
var nivel = window.location.search
nivel.replace('?','')

if (nivel === 'normal') {
  //1500
  criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
  //1000
  criaMosquitoTempo = 1000
}else if(nivel === 'chuckNorris'){
  //750
  criaMosquitoTempo = 750
}


//função para ajustar automaticamente a area
//chamando a funcao no body pelo metodo onresize=""
function ajustaTamanhoPalcoJogo(){
  altura = window.innerHeight
  largura = window.innerWidth
  console.log(largura,altura)
}

//inicando a funcão
ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){
  tempo -= 1 

  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  }else{
     document.getElementById('cronometro').innerHTML = tempo
  }
 
  
}, 1000);


function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    if( document.getElementById('mosquito')){
      document.getElementById('mosquito').remove()

      if(vidas >3){
        window.location.href = 'fim_de_jogo.html'
      }
      document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
      vidas++
    }
    


    //Criando posições aleatorias(X, Y)
    //Math.floor=arredondar
    //Math.random=gerar um valor aleatorio.

    //OBS: .random() gera valores entre 0 e 1, por isso
    //multiplicamos pela largura e altura

    //subtraimos 90 pois a imagem possui 50px e caso o valor aleatorio
    //seja proximo do limite, automaticamente se criaria uma barra de rolagem
    //o que não queremos

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //************************************************************* */

    //aqui utilizamos o operador ternario para que não ocorra
    //que o valor da imagem fique nagetivo e ela desapareca da tela de interação
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX,posicaoY)


    //************************************************************* */

    //criar o elemento html atraves do DOM

    //criamos uma variavel e atribuimos o elemento img para ela
    var mosquito = document.createElement('img')
    
    //utilizamos o scr pra atribuir uma imagem ao elemento
    mosquito.src = 'imagens/mosquito.png'

    //estilizamos o elemento
    mosquito.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()

    //atribuimos a posicao do eixo X
    mosquito.style.left = posicaoX + 'px'

    //atribuimos a posicao do eixo Y
    mosquito.style.top = posicaoY + 'px'

    //setamos a position para absolute para que a imagem percorra a area
    mosquito.style.position = 'absolute'

    //criação de um id para o elemento
    mosquito.id = 'mosquito'

    mosquito.onclick = function(){
      //remove o elemento no momento do clique
      this.remove()
    }





   //A função appendChild() insere um elemento filho (children) ao elemento pai (parent), nesse caso o elemento pai é o body
    document.body.appendChild(mosquito)
    
}


function tamanhoAleatorio(){
  var classe =  Math.floor(Math.random() * 3)
  console.log(classe)

  switch (classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}



function ladoAleatorio(){
  var classe =  Math.floor(Math.random() * 2)
  console.log(classe)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
    
  }
}

