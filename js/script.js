import lightDark from "./light-dark-mode.js";
import mostraForm from "./exibe-form.js";
import inicio from "./volta-ao-inicio.js";
import { conectaAPI } from "./conecta-api.js";
import { mostraEndereco } from "./exibe-endereco.js";
import { mostraCep } from "./exibe-cep.js";
import iniciaMenuMobile from "./menu-mobile.js";
import validaFormularioEndereco from "./valida-formulario-endereco.js"

lightDark();
iniciaMenuMobile();
mostraForm();
validaFormularioEndereco();
inicio();
conectaAPI;
mostraEndereco;
mostraCep;

// !VALIDAR OS FORMULÁRIOS
// !INSERIR O CLICK FORA PARA FECHAR O MENU