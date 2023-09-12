export default function inicio() {
  const logo = document.querySelector('[data-link="logo"]'),
        linkInicio = document.querySelector('[data-link="inicio"]'),
        titulo = document.querySelector('[data-titulo="principal"]'),
        formularios = document.querySelectorAll('[data-busca]');

  function voltaAoInicio() {
    titulo.innerText = 'O que deseja fazer?';
    formularios.forEach(card => card.classList.remove('form-ativo'));
  }

  logo.addEventListener('click', voltaAoInicio);
  linkInicio.addEventListener('click', voltaAoInicio);
}