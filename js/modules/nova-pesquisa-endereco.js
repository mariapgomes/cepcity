export default function novaPesquisaEndereco () {
  const endereco = document.querySelectorAll('[data-input]'),
        cep = document.querySelector('[data-input="CEP"]');

  cep.addEventListener('focus', limpaResultado);
  
  function limpaResultado() {
    endereco.forEach(campo => {
      if(campo !== cep) {
        campo.value = '';
      }
    });
  }
}