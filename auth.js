/* ======================================================
   IMPORTAÇÃO DA AUTENTICAÇÃO
   ====================================================== */

import { auth } from "./firebase.js";

/*
Importa o sistema de autenticação
criado no firebase.js.

Lembra desta linha?

const auth = getAuth(app);

Ela criou o sistema responsável por:

✔ Login

✔ Logout

✔ Controle de usuários

Agora estamos usando esse sistema aqui.
*/


/* ======================================================
   IMPORTAÇÃO DA FUNÇÃO DE MONITORAMENTO
   ====================================================== */

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

/*
Importa a função onAuthStateChanged().

Nome complicado, mas significa:

"Observe quando o estado do login mudar."

Ela consegue detectar:

✔ Usuário logado

✔ Usuário deslogado

✔ Login recém realizado

✔ Logout recém realizado
*/


/* ======================================================
   VERIFICAÇÃO DE LOGIN
   ====================================================== */

onAuthStateChanged(auth, (user) => {

  /*
  O Firebase verifica automaticamente:

  Existe usuário logado?

  Se existir:
     user recebe os dados.

  Se não existir:
     user será null.
  */


  if (!user) {

    /*
    O símbolo ! significa NÃO.

    Então:

    !user

    significa:

    "não existe usuário logado"
    */


    window.location.href = "login.html";

    /*
    Redireciona para login.html.

    É como dizer:

    "Você não está logado.
    Volte para a tela de login."
    */

  }

});