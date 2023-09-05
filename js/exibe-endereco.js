import { conectaAPI } from "./conecta-api.js";

const submit = document.querySelector('[data-buscar="Endereço"]');

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
}

submit.addEventListener('click', buscaCep);

export const mostraEndereco = {
  buscaCep,
  exibeEndereco
}