export default function mostraForm() {

  const cards = document.querySelectorAll('[data-card]'),
        containerCards = document.querySelector('[data-container="cards"]'),
        formularios = document.querySelectorAll('[data-form]'),
        formBuscaCep = document.querySelector('[data-form="CEP"]'),
        formBuscaEndereco = document.querySelector('[data-form="Endereco"]'),
        titulo = document.querySelector('[data-titulo="principal"]'),
        navCep = document.querySelector('[data-exibe="form-cep"]'),
        navEndereco = document.querySelector('[data-exibe="form-endereco"]'),
        inputs = document.querySelectorAll('input');
  
  function exibeForm(event) {
    const card = event.currentTarget.getAttribute('data-card');

    formularios.forEach(card => card.classList.remove('form-ativo'));
    inputs.forEach(input => input.value = '');
    containerCards.classList.add('posicao-cards');

    if(card === '1' || event.currentTarget === navCep) {
      titulo.innerText = 'Buscar por CEP';
      formBuscaCep.classList.add('form-ativo');
    } else if(card === '2' || event.currentTarget === navEndereco) {
      titulo.innerText = 'Buscar por Endereços';
      formBuscaEndereco.classList.add('form-ativo');
    }

    if (window.innerWidth <= 480 && formBuscaCep.classList.contains('form-ativo') || window.innerWidth <= 480 && formBuscaEndereco.classList.contains('form-ativo')) {
      containerCards.classList.add('oculta-card');
    }
  }
  
  cards.forEach(card => {card.addEventListener('click', exibeForm)});
  navCep.addEventListener('click', exibeForm);
  navEndereco.addEventListener('click', exibeForm);
}
