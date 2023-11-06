import { conectaAPI } from "./conecta-api.js";
import novaPesquisaEndereco from "./nova-pesquisa-endereco.js";

const form = document.querySelector('[data-form="Endereco"]')

function buscaCep(event) {
  event.preventDefault();
  const cep = document.querySelector('[data-input="CEP"]').value;

  conectaAPI.conectaAPIEndereco(cep);
}

function exibeEndereco(endereco) {
  
  const logradouro = document.querySelector('[data-input="Logradouro"]');
  const bairro = document.querySelector('[data-input="Bairro"]');
  const cidade = document.querySelector('[data-input="Cidade"]');
  const estado = document.querySelector('[data-input="Estado"]');
  
  logradouro.value = endereco.logradouro;
  bairro.value = endereco.bairro;
  cidade.value = endereco.localidade;
  estado.value = endereco.uf;

  if(logradouro.value !== '') {
    novaPesquisaEndereco();
  }
}

form.addEventListener('submit', buscaCep);

export const mostraEndereco = {
  buscaCep,
  exibeEndereco
}