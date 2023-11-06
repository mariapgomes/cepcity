export default function validaFormularioEndereco() {
  const campoCep = document.querySelector('[data-input="CEP"]'),
        spanCep = document.querySelector('[data-span="cep"]');
  
  function validaCampo() {
    if(campoCep.value.includes('.') || campoCep.value.includes('-')){
      campoCep.classList.add('erro-border');
      spanCep.innerText = 'Digite apenas números.'
      spanCep.classList.add('erro-color');
    } else if(campoCep.value.length < 8) {
      campoCep.classList.add('erro-border');
      spanCep.innerText = 'Digite o CEP completo.';
      spanCep.classList.add('erro-color');
    }else {
      campoCep.classList.remove('erro-border');
      spanCep.classList.remove('erro-color');
    }
  }
  
  campoCep.addEventListener('change', validaCampo);
}
