import { mostraEndereco } from "./exibe-endereco.js";
import { mostraCep } from "./exibe-cep.js";
import exibeErros from "./exibe-erros.js";

async function conectaAPIEndereco(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const respostaConvertida = await resposta.json();

    if(respostaConvertida.erro) {
      throw new Error('O CEP não existe!');
    }
    mostraEndereco.exibeEndereco(respostaConvertida);

  } catch (error) {
    if(error.message === 'O CEP não existe!') {
      exibeErros('<p>O CEP não existe! Tente novamente.<p>', 'busca-endereco');
    } else {
      exibeErros(`<p>Ocorreu um erro! Tente novamente.</p>`, 'busca-endereco');
    }
  }
}

async function conectaAPICep(endereco) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${endereco.estado}/${endereco.cidade}/${endereco.logradouro}/json/`);
    const respostaConvertida = await resposta.json();

    if(respostaConvertida.length === 0) {
      throw new Error ('Endereço incorreto!');
    };
    mostraCep.exibeCep(respostaConvertida);

  } catch (error) {
    if(error.message === 'Endereço incorreto!') {
      exibeErros('<p>Endereço incorreto! Digite o logradouro sem abreviações e confira o restante dos dados.</p>', 'busca-cep');
    } else {
      exibeErros(`<p>Ocorreu um erro! Tente novamente.</p>`, 'busca-cep');
    }
  }
}


export const conectaAPI = {
  conectaAPIEndereco,
  conectaAPICep
}