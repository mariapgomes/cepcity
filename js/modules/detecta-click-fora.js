export default function detectaClickFora(element, events, callback) {
  const html = document.documentElement,
        jaAtivo = 'data-ativo';

  if(!element.hasAttribute(jaAtivo)) {
    events.forEach(event => {
      setTimeout(() => html.addEventListener(event, clickFora));
    })
    element.setAttribute(jaAtivo, '');
  }

  function clickFora(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(jaAtivo);

      events.forEach(event => {
        html.removeEventListener(event, clickFora);
      })
      callback();
    }
  }
}