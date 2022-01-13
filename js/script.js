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