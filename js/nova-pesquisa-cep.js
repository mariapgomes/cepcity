export default function novaPesquisa () {
  const endereco = [
    document.querySelector('[data-input="Logradouro-cep"]'),
    document.querySelector('[data-input="Bairro-cep"]'),
    document.querySelector('[data-input="Cidade-cep"]'),
    document.querySelector('[data-input="Estado-cep"]')
  ];
  const cep = document.querySelector('[data-input="CEP-resultado"]');
  
  endereco.forEach(dado => {
    dado.addEventListener('focus', limpaResultado);
  });
  
  function limpaResultado() {
    cep.value = '';
  }
}