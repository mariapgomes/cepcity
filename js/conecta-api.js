import { mostraEndereco } from "./exibe-endereco.js";

export default async function conectaAPI(cep) {
  const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
  const respostaConvertida = await resposta.json();

  mostraEndereco.exibeEndereco(respostaConvertida)
}

