import lightDark from "./modules/light-dark-mode.js";
import iniciaMenuMobile from "./modules/menu-mobile.js";
import mostraForm from "./modules/exibe-form.js";
import inicio from "./modules/volta-ao-inicio.js";
import { conectaAPI } from "./modules/conecta-api.js";
import { mostraEndereco } from "./modules/exibe-endereco.js";
import { mostraCep } from "./modules/exibe-cep.js";
import validaFormularioCep from "./modules/valida-formulario-cep.js";
import validaFormularioEndereco from "./modules/valida-formulario-endereco.js"

lightDark();
iniciaMenuMobile();
mostraForm();
validaFormularioCep();
validaFormularioEndereco();
inicio();
conectaAPI;
mostraEndereco;
mostraCep;
