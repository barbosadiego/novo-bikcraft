const links = document.querySelectorAll('.header-menu a');

function activeMenu(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('active');
    console.log(href);
  }
}

links.forEach(activeMenu);

const parans = new URLSearchParams(location.search);

function activeProduct(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}

parans.forEach(activeProduct);
