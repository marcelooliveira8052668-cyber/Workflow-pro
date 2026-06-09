/* ======================================================
   IMPORTAÇÕES DO FIREBASE
   ====================================================== */

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

/*
Importa a função initializeApp().

Essa função serve para ligar seu projeto
ao Firebase.

Imagine assim:

Seu sistema = Controle remoto

Firebase = Televisão

initializeApp() = botão de ligar
*/


import { getAuth }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

/*
Importa o sistema de autenticação.

Auth significa Authentication.

Ele será responsável por:

✔ Login

✔ Cadastro de usuários

✔ Logout

✔ Controle de acesso
*/


import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

/*
Importa o Firestore.

Firestore é o banco de dados do Firebase.

É nele que serão armazenados:

✔ Funcionários

✔ Clientes

✔ Produtos

✔ Vendas

✔ Qualquer informação do sistema
*/


/* ======================================================
   CONFIGURAÇÃO DO PROJETO FIREBASE
   ====================================================== */

const firebaseConfig = {

  apiKey: "AIzaSyADOJt6tLDSBm7PSa2h830YcVDukbS87yU",

  authDomain: "workflow-pro-4d27a.firebaseapp.com",

  projectId: "workflow-pro-4d27a",

  storageBucket: "workflow-pro-4d27a.firebasestorage.app",

  messagingSenderId: "792481006303",

  appId: "1:792481006303:web:0381d003a359b723789f6a",

  measurementId: "G-Y9B7ESZ537"
};

/*
Essas informações identificam seu projeto.

Imagine que o Firebase é um condomínio.

Esses dados funcionam como:

✔ Número do apartamento

✔ Bloco

✔ Chave de acesso

Assim o Firebase sabe exatamente
qual projeto deve ser aberto.

IMPORTANTE:

Esses dados NÃO são senhas.

Eles servem apenas para identificar
o projeto.
*/


/* ======================================================
   INICIALIZA O FIREBASE
   ====================================================== */

const app = initializeApp(firebaseConfig);

/*
Liga a conexão com o Firebase.

A partir daqui o sistema consegue
conversar com os servidores do Firebase.
*/


/* ======================================================
   INICIALIZA A AUTENTICAÇÃO
   ====================================================== */

const auth = getAuth(app);

/*
Cria o serviço de login.

A variável auth será usada para:

✔ Entrar

✔ Sair

✔ Criar usuários

✔ Verificar usuários logados
*/


/* ======================================================
   INICIALIZA O FIRESTORE
   ====================================================== */

const db = getFirestore(app);

/*
Cria a conexão com o banco de dados.

A variável db será usada para:

✔ Salvar dados

✔ Buscar dados

✔ Atualizar dados

✔ Excluir dados
*/


/* ======================================================
   EXPORTAÇÃO
   ====================================================== */

export { auth, db };

/*
Disponibiliza auth e db
para outros arquivos.

Exemplo:

funcionarios.js

import { db } from "./firebase.js";

login.js

import { auth } from "./firebase.js";

Assim não precisamos criar
a conexão várias vezes.
*/

