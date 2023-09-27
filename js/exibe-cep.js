import { conectaAPI } from "./conecta-api.js";
import exibeErros from "./exibe-erros.js";
import novaPesquisaCep from "./nova-pesquisa-cep.js";

const btnSubmit = document.querySelector('[data-buscar="cep"]');
btnSubmit.addEventListener('click', buscaEndereco);

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

function exibeCep(listaEnderecos) {
  const cep = document.querySelector('[data-input="CEP-resultado"]');
  const bairro = document.querySelector('[data-input="Bairro-cep"]').value.toLowerCase();
  let qntEnderecosAnalisados = 0 

  listaEnderecos.forEach(endereco => {
    if (endereco.bairro.toLowerCase() === bairro){
      cep.value = endereco.cep.replace('-','');
    } else {
      qntEnderecosAnalisados += 1;
    }
  });

  if(qntEnderecosAnalisados === listaEnderecos.length) {
    exibeErros(`<p>Bairro Incorreto! Tente novamente.</p>`, 'busca-cep');
  }
  
  if(cep.value !== '') {
    novaPesquisaCep();
  }
}

export const mostraCep = {
  buscaEndereco,
  exibeCep
}

