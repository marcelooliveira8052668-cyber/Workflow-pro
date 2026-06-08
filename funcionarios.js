import { db } from "./firebase/firebase.js";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

console.log("FUNCIONARIOS.JS CARREGOU");

const btnSalvar = document.getElementById("btnSalvar");

if (btnSalvar) {

  btnSalvar.addEventListener("click", async () => {

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const email = document.getElementById("email").value;

    const msg = document.getElementById("msg");

    try {

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

      msg.innerHTML = "✅ Funcionário cadastrado com sucesso!";

      document.getElementById("nome").value = "";
      document.getElementById("cargo").value = "";
      document.getElementById("departamento").value = "";
      document.getElementById("email").value = "";

      console.log("Funcionário salvo!");
      await testarFirebase();

    } catch (erro) {

      console.error("Erro Firestore:", erro);

      msg.innerHTML =
        "❌ Erro ao cadastrar funcionário. Verifique o Console (F12).";

    }

  });

}


async function testarFirebase() {

  const lista = document.getElementById("lista-funcionarios");

  const dados = await getDocs(
    collection(db, "funcionarios")
  );

  lista.innerHTML = "";

dados.forEach((doc) => {

  const funcionario = doc.data();
const id = doc.id;
lista.innerHTML += `
  <div class="funcionario-card">
    <h3>${funcionario.nome}</h3>
    <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
    <p><strong>Departamento:</strong> ${funcionario.departamento}</p>
    <p><strong>Email:</strong> ${funcionario.email}</p>
    <p><strong>ID:</strong> ${id}</p>
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

});
}

testarFirebase();
console.log("CHEGUEI NO FINAL DO ARQUIVO");
document.addEventListener("click", async (e) => {

  if (e.target.classList.contains("btn-editar")) {

    const id = e.target.dataset.id;
    const card = e.target.closest(".funcionario-card");
const nome = card.querySelector("h3").textContent;
const cargoTexto = card.querySelectorAll("p")[0].textContent;
const cargo = cargoTexto.replace("Cargo:", "").trim();

document.getElementById("cargo").value = cargo;
console.log(cargoTexto);
document.getElementById("nome").value = nome;
console.log("Nome:", nome);

    console.log("EDITAR:", id);

  }
  

  if (e.target.classList.contains("btn-excluir")) {

    const id = e.target.dataset.id;

    const confirmar = confirm(
      "Deseja realmente excluir este funcionário?"
    );


    if (!confirmar) return;

await deleteDoc(
  doc(db, "funcionarios", id)
);

await testarFirebase();

console.log("Funcionário excluído!");
  }

});


