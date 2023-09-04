export default async function conectaAPI () {
  const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
  const respostaConvertida = await resposta.json();

  return respostaConvertida
}
