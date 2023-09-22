import { conectaAPI } from "./conecta-api.js";
import { mostraEndereco } from "./exibe-endereco.js";
import { mostraCep } from "./exibe-cep.js";
import mostraForm from "./exibe-form.js";
import inicio from "./volta-ao-inicio.js";
import lightDark from "./light-dark-mode.js";

conectaAPI;
mostraEndereco;
mostraCep;
mostraForm();
inicio();
lightDark();