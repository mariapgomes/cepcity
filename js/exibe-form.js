export default function mostraForm() {

  const cards = document.querySelectorAll('[data-card]'),
        formularios = document.querySelectorAll('[data-busca]'),
        formBuscaCep = document.querySelector('[data-busca="CEP"]'),
        formBuscaEndereco = document.querySelector('[data-busca="Endereco"]'),
        titulo = document.querySelector('[data-titulo="principal"]')
  
  function exibeForm(event) {
    const card = event.currentTarget.getAttribute('data-card');
    formularios.forEach(card => card.classList.remove('form-ativo'));

    if(card === '1') {
      titulo.innerText = 'Buscar por CEP';
      formBuscaCep.classList.add('form-ativo');
    } else {
      titulo.innerText = 'Buscar por Endereços';
      formBuscaEndereco.classList.add('form-ativo');
    }
  }
  
  cards.forEach(card => {card.addEventListener('click', exibeForm)});
}
