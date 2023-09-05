import { mostraEndereco } from "./exibe-endereco.js";
import { mostraCep } from "./exibe-cep.js"

async function conectaAPIEndereco(cep) {
  const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
  const respostaConvertida = await resposta.json();

  mostraEndereco.exibeEndereco(respostaConvertida)
}

async function conectaAPICep(endereco) {
  const resposta = await fetch(`http://viacep.com.br/ws/${endereco.estado}/${endereco.cidade}/${endereco.logradouro}/json/`);
  const respostaConvertida = await resposta.json();

  mostraCep.exibeCep(respostaConvertida)
}


export const conectaAPI = {
  conectaAPIEndereco,
  conectaAPICep
}