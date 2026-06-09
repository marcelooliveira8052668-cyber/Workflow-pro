/* ======================================================
   IMPORTAÇÕES
   ====================================================== */

import { db } from "./firebase.js";
/*
Importa a conexão com o Firebase.

Imagine que o Firebase é um grande armário
onde os dados ficam guardados.

A variável "db" é a chave para acessar esse armário.
*/


import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

/*
addDoc      -> adiciona um documento
collection  -> acessa uma coleção
getDocs     -> busca documentos
deleteDoc   -> apaga documentos
doc         -> localiza um documento específico
*/


/* ======================================================
   TESTE DE CARREGAMENTO
   ====================================================== */

console.log("FUNCIONARIOS.JS CARREGOU");

/*
Mostra uma mensagem no Console (F12).

Serve para verificar se o arquivo foi carregado.
*/


/* ======================================================
   BOTÃO SALVAR
   ====================================================== */

const btnSalvar = document.getElementById("btnSalvar");

/*
Procura um elemento HTML com id="btnSalvar".

Exemplo:

<button id="btnSalvar">Salvar</button>
*/


if (btnSalvar) {

/*
Só executa o código se o botão existir.
*/

  btnSalvar.addEventListener("click", async () => {

    /*
    Quando clicar no botão,
    executa tudo que está aqui dentro.
    */

    const nome = document.getElementById("nome").value;
    /*
    Pega o nome digitado.
    */

    const cargo = document.getElementById("cargo").value;
    /*
    Pega o cargo digitado.
    */

    const departamento =
      document.getElementById("departamento").value;
    /*
    Pega o departamento digitado.
    */

    const email =
      document.getElementById("email").value;
    /*
    Pega o email digitado.
    */

    const msg = document.getElementById("msg");
    /*
    Área onde aparecerão mensagens.
    */


    try {

      /*
      Tenta executar o cadastro.
      */

      await addDoc(

        collection(db, "funcionarios"),

        {
          nome: nome,
          cargo: cargo,
          departamento: departamento,
          email: email,
          criadoEm: new Date()
        }

      );

      /*
      Cria um novo documento no Firebase.

      Coleção:
      funcionarios

      Dados:
      nome
      cargo
      departamento
      email
      data de criação
      */


      msg.innerHTML =
        "✅ Funcionário cadastrado com sucesso!";

      /*
      Mostra mensagem de sucesso.
      */


      document.getElementById("nome").value = "";
      document.getElementById("cargo").value = "";
      document.getElementById("departamento").value = "";
      document.getElementById("email").value = "";

      /*
      Limpa os campos do formulário.
      */


      console.log("Funcionário salvo!");

      /*
      Mensagem de teste.
      */


      await testarFirebase();

      /*
      Atualiza a lista de funcionários.
      */

    } catch (erro) {

      /*
      Executa se acontecer algum erro.
      */

      console.error("Erro Firestore:", erro);

      msg.innerHTML =
        "❌ Erro ao cadastrar funcionário. Verifique o Console (F12).";

    }

  });

}


/* ======================================================
   LISTAR FUNCIONÁRIOS
   ====================================================== */

async function testarFirebase() {

  /*
  Esta função busca todos os funcionários.
  */

  const lista =
    document.getElementById("lista-funcionarios");

  /*
  Área onde os funcionários serão exibidos.
  */


  const dados = await getDocs(
    collection(db, "funcionarios")
  );

  /*
  Busca todos os documentos da coleção.
  */


  lista.innerHTML = "";

  /*
  Limpa a lista antes de recriar.
  */


  dados.forEach((doc) => {

    /*
    Percorre funcionário por funcionário.
    */

    const funcionario = doc.data();

    /*
    Dados do funcionário.
    */

    const id = doc.id;

    /*
    ID único criado pelo Firebase.
    */


    lista.innerHTML += `

      <div class="funcionario-card">

        <h3>${funcionario.nome}</h3>

        <p>
          <strong>Cargo:</strong>
          ${funcionario.cargo}
        </p>

        <p>
          <strong>Departamento:</strong>
          ${funcionario.departamento}
        </p>

        <p>
          <strong>Email:</strong>
          ${funcionario.email}
        </p>

        <p>
          <strong>ID:</strong>
          ${id}
        </p>

        <button
          class="btn-editar"
          data-id="${id}">
          Editar
        </button>

        <button
          class="btn-excluir"
          data-id="${id}">
          Excluir
        </button>

      </div>

    `;

    /*
    Cria um card HTML para cada funcionário.
    */

  });

}


/* ======================================================
   CARREGA FUNCIONÁRIOS AO ABRIR A PÁGINA
   ====================================================== */

testarFirebase();

/*
Executa automaticamente quando a página abre.
*/

console.log("CHEGUEI NO FINAL DO ARQUIVO");


/* ======================================================
   CAPTURA CLIQUES DOS BOTÕES
   ====================================================== */

document.addEventListener("click", async (e) => {

  /*
  Escuta todos os cliques da página.
  */

  if (
    e.target.classList.contains("btn-editar")
  ) {

    /*
    Se clicou em Editar.
    */

    const id = e.target.dataset.id;

    /*
    Pega o ID do funcionário.
    */


    const card =
      e.target.closest(".funcionario-card");

    /*
    Encontra o card correspondente.
    */


    const nome =
      card.querySelector("h3").textContent;

    /*
    Pega o nome.
    */


    const cargoTexto =
      card.querySelectorAll("p")[0].textContent;

    /*
    Pega o texto do cargo.
    */


    const cargo =
      cargoTexto.replace("Cargo:", "").trim();

    /*
    Remove a palavra Cargo:
    */

    document.getElementById("cargo").value = cargo;

    document.getElementById("nome").value = nome;

    /*
    Preenche o formulário.
    */


    console.log("Nome:", nome);
    console.log("EDITAR:", id);

  }


  /* ==================================================
     EXCLUIR FUNCIONÁRIO
     ================================================== */

  if (
    e.target.classList.contains("btn-excluir")
  ) {

    const id = e.target.dataset.id;

    /*
    Pega o ID do funcionário.
    */


    const confirmar = confirm(
      "Deseja realmente excluir este funcionário?"
    );

    /*
    Exibe uma caixa de confirmação.
    */


    if (!confirmar) return;

    /*
    Se clicar Cancelar,
    para a execução.
    */


    await deleteDoc(
      doc(db, "funcionarios", id)
    );

    /*
    Apaga o documento do Firebase.
    */


    await testarFirebase();

    /*
    Atualiza a lista.
    */


    console.log("Funcionário excluído!");

  }

});
