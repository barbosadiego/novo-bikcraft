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
  const ativa = resposta.classList.contains('active')
  pergunta.setAttribute('aria-expanded', ativa)
}

perguntas.forEach((pergunta) =>
  pergunta.addEventListener('click', ativarPerguta),
);
