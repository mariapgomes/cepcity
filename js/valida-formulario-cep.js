export default function validaFormularioCep() {
  
  const inputs = document.querySelectorAll('[data-form="CEP"] [data-input]'),
        spanLogradouro = document.querySelector('[data-span="logradouro"]');
  
  function validaCampo(event) {
    const campo = event.currentTarget;
    const logradouro = campo.getAttribute('data-input') === 'Logradouro-cep';
    const valor = campo.value.toUpperCase();
    const abreviacoes = [
    'AC ', 'AV ', 'AL ', 'DR ', 'BC ', 'EST ', 'ESTR ', 'TV ', 'R ', 'PROF ', 'PRES ', 'S ', 'VISC '
    ];
    
    if (abreviacoes.some(abreviacao => valor.includes(abreviacao) && !/[A-Z]/.test(valor[valor.indexOf(abreviacao)-1]))) {
      acoesErro('Digite sem abreviações.');
  
    } else if (!logradouro && /[0-9]/.test(valor)) {
      acoesErro('O dado não deve conter números.');
  
    } else if(/[0-9]/.test(valor[0])) {
      acoesErro('O dado não deve iniciar com números.');
  
    } else if(/[0-9]/.test(valor[1]) || /[0-9]/.test(valor[2])) {
      acoesErro('Os três primeiros caracteres não devem conter números.');
      
    } else if (valor[valor.length-1] === '.') {
      acoesErro('Digite o dado sem ponto final.');
  
    } else if(valor.includes('.')) {
      acoesErro('Digite sem abreviações.');
  
    } else {
      removeErro();
    }
  
    function acoesErro(mensagem) {
  
      if(logradouro) {
        campo.classList.add('erro-border');
        spanLogradouro.innerText = `${mensagem}`
        spanLogradouro.classList.add('erro-color');
  
      } else {
        const span = document.createElement('span'),
              containerInput = campo.parentElement;
  
        campo.classList.add('erro-border');
        
        if (containerInput.querySelector('span.erro-color') === null) {
          span.innerText = `${mensagem}`;
          span.classList.add('erro-color');
          containerInput.appendChild(span);
        } else {
          const spanExistente = containerInput.querySelector('.erro-color');
          spanExistente.innerText = `${mensagem}`;
        }
      }
    }
  
    function removeErro() {
      if (!logradouro) {
        const spanDosInputs = campo.parentElement.querySelector('.erro-color');
        
        if (spanDosInputs !== null) {
          spanDosInputs.remove();
        }
      }
  
      campo.classList.remove('erro-border');
      spanLogradouro.classList.remove('erro-color');
    }
  }
  inputs.forEach(campo => campo.addEventListener('change', validaCampo));
}