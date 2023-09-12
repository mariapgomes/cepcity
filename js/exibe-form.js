export default function mostraForm() {

  const cards = document.querySelectorAll('[data-card]'),
        formularios = document.querySelectorAll('[data-busca]'),
        formBuscaCep = document.querySelector('[data-busca="CEP"]'),
        formBuscaEndereco = document.querySelector('[data-busca="Endereco"]'),
        titulo = document.querySelector('[data-titulo="principal"]'),
        navCep = document.querySelector('[data-exibe="form-cep"]'),
        navEndereco = document.querySelector('[data-exibe="form-endereco"]');
  
  function exibeForm(event) {
    const card = event.currentTarget.getAttribute('data-card');
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
