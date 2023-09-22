export default function mostraForm() {

  const cards = document.querySelectorAll('[data-card]'),
        containerCards = document.querySelector('[data-container="cards"]'),
        formularios = document.querySelectorAll('[data-form]'),
        formBuscaCep = document.querySelector('[data-form="CEP"]'),
        formBuscaEndereco = document.querySelector('[data-form="Endereco"]'),
        titulo = document.querySelector('[data-titulo="principal"]'),
        navCep = document.querySelector('[data-exibe="form-cep"]'),
        navEndereco = document.querySelector('[data-exibe="form-endereco"]');
  
  function exibeForm(event) {
    const card = event.currentTarget.getAttribute('data-card');

    containerCards.classList.add('posicao-cards');
    
    formularios.forEach(card => card.classList.remove('form-ativo'));
    if(card === '1' || event.currentTarget === navCep) {
      titulo.innerText = 'Buscar por CEP';
      formBuscaCep.classList.add('form-ativo');
    } else if(card === '2' || event.currentTarget === navEndereco) {
      titulo.innerText = 'Buscar por Endereços';
      formBuscaEndereco.classList.add('form-ativo');
    }
  }
  
  cards.forEach(card => {card.addEventListener('click', exibeForm)});
  navCep.addEventListener('click', exibeForm);
  navEndereco.addEventListener('click', exibeForm);
}
