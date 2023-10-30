export default function iniciaMenuMobile() {
  
  const btnMenu = document.querySelector('[data-btn="mobile"]'),
        animaBtn = document.querySelectorAll('.menu-hamburguer'),
        menu = document.querySelector('[data-menu]');
  
  btnMenu.addEventListener('click', abreMenu);
  
  let menuAberto = false
  function abreMenu() {
    
    if(menuAberto) {
      menu.classList.add('anima-menu');

      setTimeout(() => {
        menu.classList.remove('ativo');
      },300);
      setTimeout(() => {
        menu.classList.remove('anima-menu');
      },400);

      menuAberto = false
    } else {
      menu.classList.add('ativo');
      menuAberto = true;
    }

    setTimeout(() => {
      animaBtn[0].classList.toggle('desativado');
      animaBtn[1].classList.toggle('ativo1');
      animaBtn[2].classList.toggle('ativo2');
    },200);
  }
}
