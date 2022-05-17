const links = document.querySelectorAll('.header-menu a');

function activeMenu(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('active');
  }
}

links.forEach(activeMenu);

//URL Params

const parans = new URLSearchParams(location.search);

function activeProduct(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}

parans.forEach(activeProduct);

//Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPerguta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('active');
  const ativa = resposta.classList.contains('active');
  pergunta.setAttribute('aria-expanded', ativa);
}

perguntas.forEach((pergunta) =>
  pergunta.addEventListener('click', ativarPerguta),
);

//Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function eventosGaleria(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width:1000px)').matches;
  if (media) galeriaContainer.prepend(img);
}

galeria.forEach((img) => img.addEventListener('click', eventosGaleria));


//Animação

if(window.SimpleAnime){
  new SimpleAnime()
}