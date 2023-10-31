import lightDark from "./light-dark-mode.js";
import mostraForm from "./exibe-form.js";
import inicio from "./volta-ao-inicio.js";
import { conectaAPI } from "./conecta-api.js";
import { mostraEndereco } from "./exibe-endereco.js";
import { mostraCep } from "./exibe-cep.js";
import iniciaMenuMobile from "./menu-mobile.js"

iniciaMenuMobile();
lightDark();
mostraForm();
inicio();
conectaAPI;
mostraEndereco;
mostraCep;

// !FAZER A PESQUISA POR SUBMIT E NÃO POR CLICK
// !CRIAR FILTRO DE BUSCA POR NÚMERO PARA SELECIONAR 1 ENDEREÇO