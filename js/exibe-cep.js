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
  const numero = document.querySelector('#numero');
  let qntEnderecosAnalisados = 0;
  let bairrosExistentes = 0;

  if(numero === null && listaEnderecos.length > 1) {

    listaEnderecos.forEach(endereco => {
    
      if (endereco.bairro.toLowerCase() === bairro){
        bairrosExistentes += 1;
      } else {
        qntEnderecosAnalisados += 1;
      }

    })

    if (bairrosExistentes === 1) {
      listaEnderecos.forEach(endereco => {
    
        if (endereco.bairro.toLowerCase() === bairro){
          cep.value = endereco.cep.replace('-','');
        }
      })

    } else if (bairrosExistentes > 1) {
      const enderecosFiltrados =  listaEnderecos.map(endereco => {
                              if (endereco.bairro.toLowerCase() === bairro) {
                                return endereco;
                              }
                            });

      criaSelecao(enderecosFiltrados);

    } else if (bairrosExistentes === listaEnderecos.length) {
      criaSelecao(listaEnderecos);
    }
    
  } else if (numero !== null && listaEnderecos.length > 1) {

    listaEnderecos.forEach(endereco => {

      if (endereco.bairro.toLowerCase() === bairro && endereco.complemento === numero.value){
        cep.value = endereco.cep.replace('-','');
      }
    })

  } else {
    listaEnderecos.forEach(endereco => {
      
      if (endereco.bairro.toLowerCase() === bairro){
        cep.value = endereco.cep.replace('-','');
      } else {
        qntEnderecosAnalisados += 1;
      }
    })
  }

  if(qntEnderecosAnalisados === listaEnderecos.length) {
    exibeErros(`<p>Bairro Incorreto! Tente novamente.</p>`, 'busca-cep');
  }
  
  if(cep.value !== '') {
    novaPesquisaCep();
  }
}

function criaSelecao(listaEnderecos) {
  const btn = document.querySelector('.submit-form-2'),
        form = document.querySelector('[data-form="CEP"]');

  const containerResultado = document.createElement('div');
  containerResultado.classList.add('selecao-numero')
  containerResultado.innerHTML += `<label for="" class="mb-1 font-2-l">O número do endereço é:</label>
                                      <select id="numero" name="numero" class="estado" required data-input="numero">

                                      </select>`;

  form.insertBefore(containerResultado, btn);
  novaPesquisaCep()

  const select = document.querySelector('#numero');
  listaEnderecos.forEach(enderecos => {
    select.innerHTML += `<option value="${enderecos.complemento}">${enderecos.complemento}</option>`
  });
}

export const mostraCep = {
  buscaEndereco,
  exibeCep
}

