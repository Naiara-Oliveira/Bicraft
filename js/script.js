const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link){
const url = window.location.href;
const href = link.href;

if(url.includes(href)){
link.classList.add("ativo");
}

}
links.forEach( ativarLinks);
//ativar itens do orcamento
const parametro = new  URLSearchParams(location.search);
function ativarProduto(parametro){
   const elemento = document.getElementById(parametro);
   if(elemento){
      elemento.checked = true;
   }
   console.log(elemento);
}
parametro.forEach(ativarProduto);
//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
const pergunta = event.currentTarget;
const controle = pergunta.getAttribute("aria-controls");
const resposta = document.getElementById(controle);
resposta.classList.toggle("ativa");

const ativa = resposta.classList.contains("ativa");

pergunta.setAttribute("aria-expanded" ,ativa);
console.log(pergunta);
}
function eventosPerguntas(pergunta){
   pergunta.addEventListener('click',ativarPergunta);
 
 
}
perguntas.forEach(eventosPerguntas);

//galeria bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocarImagens(event){
const img = event.currentTarget;
const media = matchMedia("(min-width:1000px)").matches;
if(media){
   galeriaContainer.prepend(img);
}
}

function eventosGaleria(img){
img.addEventListener('click', trocarImagens);
}
galeria.forEach(eventosGaleria);

//Animacao
if(window.SimpleAnime){
new SimpleAnime();
}
