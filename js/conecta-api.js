import { mostraEndereco } from "./exibe-endereco.js";
import { mostraCep } from "./exibe-cep.js";
import exibeErros from "./exibe-erros.js";

async function conectaAPIEndereco(cep) {
  try {
    const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const respostaConvertida = await resposta.json();

    mostraEndereco.exibeEndereco(respostaConvertida);

  } catch (error) {
    exibeErros(`<p>Ocorreu um erro! Tente novamente.</p>`, 'busca-endereco');
  }
}

async function conectaAPICep(endereco) {
  try {
    const resposta = await fetch(`http://viacep.com.br/ws/${endereco.estado}/${endereco.cidade}/${endereco.logradouro}/json/`);
    const respostaConvertida = await resposta.json();
  console.log(respostaConvertida);
    mostraCep.exibeCep(respostaConvertida)
    
  } catch (error) {
    exibeErros(`<p>Ocorreu um erro! Tente novamente.</p>`, 'busca-cep');
  }
}


export const conectaAPI = {
  conectaAPIEndereco,
  conectaAPICep
}