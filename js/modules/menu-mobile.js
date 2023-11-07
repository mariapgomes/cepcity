import detectaClickFora from "./detecta-click-fora.js";

export default function iniciaMenuMobile() {
  
  const btnMenu = document.querySelector('[data-btn="mobile"]'),
        animaBtn = document.querySelectorAll('.menu-hamburguer'),
        menu = document.querySelector('[data-menu]');
  
  btnMenu.addEventListener('click', abreMenu)

  function abreMenu() {

    setTimeout(() => {
      animaBtn[0].classList.toggle('desativado');
      animaBtn[1].classList.toggle('ativo1');
      animaBtn[2].classList.toggle('ativo2');
    },200);
    menu.classList.add('ativo');

    detectaClickFora(menu, () => {
      
      menu.classList.add('anima-menu');
      
      setTimeout(() => {
        animaBtn[0].classList.remove('desativado');
        animaBtn[1].classList.remove('ativo1');
        animaBtn[2].classList.remove('ativo2');
      },200);
      setTimeout(() => {
        menu.classList.remove('ativo');
      },300);
      setTimeout(() => {
        menu.classList.remove('anima-menu');
      },400);
    });
  }
}
