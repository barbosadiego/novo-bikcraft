const links = document.querySelectorAll('.header-menu a');

function activeMenu(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('active');
    console.log(href)
  }
}

links.forEach(activeMenu);
