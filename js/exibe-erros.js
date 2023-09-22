export default function exibeErros(mensagem, form) {
  const alerta = document.querySelector(`[data-alerta="${form}"]`);

  alerta.innerHTML = mensagem;

  alerta.classList.remove('desativado');

  setTimeout(function(){
    alerta.classList.add('ativo');
  },100);
  setTimeout(function(){
    alerta.classList.remove('ativo');
  },5000);
  setTimeout(function(){
    alerta.classList.add('desativado');
  },5500);
}