import { conectaAPI } from "./conecta-api.js";

const btnSubmit = document.querySelector('[data-buscar="cep"]');

function buscaEndereco(event) {
  event.preventDefault();
  const endereco = {
    logradouro: document.querySelector('[data-input="Logradouro-cep"]').value,
    bairro: document.querySelector('[data-input="Bairro-cep"]').value,
    cidade: document.querySelector('[data-input="Cidade-cep"]').value,
    estado: document.querySelector('[data-input="Estado-cep"]').value
  }
  conectaAPI.conectaAPICep(endereco);
}

btnSubmit.addEventListener('click', buscaEndereco);

function exibeCep(listaEnderecos) {
  const cep = document.querySelector('[data-input="CEP-resultado"]');
  const bairro = document.querySelector('[data-input="Bairro-cep"]').value.toLowerCase();
  let qntEnderecosAnalisados = 0 

  if(listaEnderecos > 0) {
    listaEnderecos.forEach(endereco => {
      if (endereco.bairro.toLowerCase() === bairro){
        cep.value = endereco.cep.replace('-','')
      } else {
        qntEnderecosAnalisados += 1;
      }
    });
  
    if(qntEnderecosAnalisados === listaEnderecos.length) {
      alert('Bairro Incorreto!');
    }
    
  } else {
    alert(`Endereço Incorreto!
      Digite o Logradouro completo e sem abreviações. 
      Ex: Rua..., estrada..., doutor...
    ` );
  }
}

export const mostraCep = {
  buscaEndereco,
  exibeCep
}

