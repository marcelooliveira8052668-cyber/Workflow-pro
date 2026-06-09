/* ======================================================
   IMPORTAÇÃO DA CONEXÃO FIREBASE
   ====================================================== */

import { db } from "./firebase.js";

/*
Importa a conexão com o Firestore.

Lembra da variável db?

Ela foi criada no arquivo firebase.js.

É através dela que conseguimos acessar
o banco de dados.
*/


/* ======================================================
   IMPORTAÇÃO DAS FUNÇÕES DO FIRESTORE
   ====================================================== */

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

/*
collection()
→ acessa uma coleção do banco.

getDocs()
→ busca todos os documentos
de uma coleção.
*/


/* ======================================================
   FUNÇÃO PARA CONTAR FUNCIONÁRIOS
   ====================================================== */

async function carregarTotalFuncionarios() {

  /*
  Cria uma função assíncrona.

  "async" significa que ela pode esperar
  respostas da internet sem travar a página.
  */

  try {

    /*
    Tenta executar o código.
    */

    const snapshot = await getDocs(

      collection(db, "funcionarios")

    );

    /*
    Busca TODOS os funcionários
    da coleção "funcionarios".

    Exemplo:

    funcionarios
       |
       ├── João
       ├── Maria
       ├── Carlos
       └── Ana

    Todos eles serão carregados.
    */


    const total = snapshot.size;

    /*
    Conta quantos documentos foram encontrados.

    Exemplo:

    João
    Maria
    Carlos
    Ana

    Total = 4
    */


    console.log(
      "TOTAL DE FUNCIONÁRIOS:",
      total
    );

    /*
    Mostra o resultado no Console (F12).

    Exemplo:

    TOTAL DE FUNCIONÁRIOS: 4
    */


    document
      .getElementById("totalFuncionarios")
      .innerHTML = total;

    /*
    Procura um elemento HTML com:

    id="totalFuncionarios"

    e coloca o número dentro dele.

    Exemplo:

    Antes:

    Funcionários
    --

    Depois:

    Funcionários
    4
    */

  } catch (erro) {

    /*
    Executa caso aconteça algum erro.
    */

    console.error(
      "Erro ao carregar funcionários:",
      erro
    );

    /*
    Mostra o erro no Console.
    */

  }

}


/* ======================================================
   EXECUTA A FUNÇÃO
   ====================================================== */

carregarTotalFuncionarios();

/*
Chama a função automaticamente.

Quando a página abrir:

1. Conecta ao Firebase
2. Busca os funcionários
3. Conta quantos existem
4. Mostra o número na tela
*/

