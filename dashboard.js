import { db } from "./firebase/firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function carregarTotalFuncionarios() {

  try {

    const snapshot = await getDocs(
      collection(db, "funcionarios")
    );

    const total = snapshot.size;

    document.getElementById("totalFuncionarios").innerHTML = total;

  } catch (erro) {

    console.error("Erro ao carregar funcionários:", erro);

  }

}

carregarTotalFuncionarios();