export default function novaPesquisaCep () {
  const endereco = document.querySelectorAll('[data-input]'),
        cep = document.querySelector('[data-input="CEP-resultado"]'),
        seletorNumero = document.querySelector('#numero'),
        containerSeletor = document.querySelector('.selecao-numero');
  
  function limpaResultado(event) {
    cep.value = '';

    if (seletorNumero !== null && seletorNumero !== event.currentTarget) {
      containerSeletor.remove();
    }
  }

  endereco.forEach(dado => {
    dado.addEventListener('focus', limpaResultado);
  });
}