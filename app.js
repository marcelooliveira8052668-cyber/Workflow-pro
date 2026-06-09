/* ======================================================
   IMPORTAÇÃO DA AUTENTICAÇÃO
   ====================================================== */

import { auth } from "./firebase.js";

/*
Importa o sistema de autenticação criado
no arquivo firebase.js.

A variável auth é responsável por:

✔ Login
✔ Logout
✔ Controle de usuários
✔ Sessão do usuário
*/


/* ======================================================
   IMPORTAÇÃO DAS FUNÇÕES DO FIREBASE
   ====================================================== */

import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

/*
signInWithEmailAndPassword()
→ Faz login.

signOut()
→ Faz logout.
*/


/* ======================================================
   TESTE DE CARREGAMENTO
   ====================================================== */

console.log("APP.JS CARREGOU");

/*
Mostra no Console (F12):

APP.JS CARREGOU

Serve para verificar se o arquivo foi carregado.
*/


/* ======================================================
   PROCURA O BOTÃO LOGIN
   ====================================================== */

const btnLogin =
  document.getElementById("btnLogin");

/*
Procura no HTML:

<button id="btnLogin">

Se encontrar,
guarda o botão na variável btnLogin.
*/


console.log("BOTÃO LOGIN:", btnLogin);

/*
Mostra no Console se encontrou o botão.
*/


/* ======================================================
   VERIFICA SE O BOTÃO EXISTE
   ====================================================== */

if (btnLogin) {

  /*
  Só executa o código se o botão existir.
  */

  btnLogin.addEventListener("click", async () => {

    /*
    Executa quando o usuário clicar.
    */

    console.log("Botão clicado");



    /* ==========================================
       CAPTURA OS DADOS
       ========================================== */

    const email =
      document.getElementById("email").value;

    /*
    Pega o email digitado.
    */


    const senha =
      document.getElementById("senha").value;

    /*
    Pega a senha digitada.
    */


    const mensagem =
      document.getElementById("mensagem");

    /*
    Área onde serão exibidas mensagens.
    */



    /* ==========================================
       TENTA FAZER LOGIN
       ========================================== */

    try {

      await signInWithEmailAndPassword(

        auth,
        email,
        senha

      );

      /*
      Envia email e senha para o Firebase.

      O Firebase verifica:

      Existe usuário?

      A senha está correta?
      */



      mensagem.innerHTML =
        "Login realizado!";

      /*
      Mostra mensagem de sucesso.
      */



      window.location.href =
        "dashboard.html";

      /*
      Vai para o Dashboard.
      */


    } catch (error) {

      /*
      Executa se ocorrer erro.
      */

      console.error(error);

      /*
      Mostra o erro no Console.
      */


      mensagem.innerHTML =
        "Email ou senha inválidos.";

      /*
      Mostra erro para o usuário.
      */

    }

  });

}


/* ======================================================
   PROCURA O BOTÃO SAIR
   ====================================================== */

const logout =
  document.getElementById("logout");

/*
Procura no HTML:

<button id="logout">

Se encontrar,
guarda na variável logout.
*/


/* ======================================================
   VERIFICA SE O BOTÃO EXISTE
   ====================================================== */

if (logout) {

  /*
  Só executa se o botão existir.
  */

  logout.addEventListener("click", async () => {

    /*
    Executa quando clicar em Sair.
    */


    await signOut(auth);

    /*
    Remove a sessão do usuário.

    O Firebase esquece quem estava logado.
    */


    window.location.href =
      "login.html";

    /*
    Volta para a tela de login.
    */

  });

}