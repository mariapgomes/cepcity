export default function detectaClickFora(element, callback) {
  const html = document.documentElement,
        jaAtivo = 'data-ativo';

  if(!element.hasAttribute(jaAtivo)) {
    
    setTimeout(() => html.addEventListener('click', clickFora));
    element.setAttribute(jaAtivo, '');
  }

  function clickFora(event) {
    if(!element.contains(event.target)) {
      
      element.removeAttribute(jaAtivo);
      html.removeEventListener('click', clickFora);
      callback();
    }
  }
}