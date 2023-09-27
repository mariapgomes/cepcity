export default function novaPesquisaEndereco () {
  const endereco = [
    document.querySelector('[data-input="Logradouro"]'),
    document.querySelector('[data-input="Bairro"]'),
    document.querySelector('[data-input="Cidade"]'),
    document.querySelector('[data-input="Estado"]')
  ];
  const cep = document.querySelector('[data-input="CEP"]');

  cep.addEventListener('focus', limpaResultado);
  
  function limpaResultado() {
    endereco.forEach(campo => {
      campo.value = '';
    });
  }
}