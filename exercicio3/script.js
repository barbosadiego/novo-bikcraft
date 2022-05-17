const links = document.querySelectorAll('nav a');

function ativarLink(link) {
  const ref = link.href;
  if (ref === document.location.href) {
    link.style.backgroundColor = '#333';
    link.style.color = '#fff';
    console.log(ref)
  }
}

links.forEach(ativarLink);
