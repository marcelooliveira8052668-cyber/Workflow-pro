import { auth } from "./firebase/firebase.js";

import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

console.log("APP CARREGOU");

const btnLogin = document.getElementById("btnLogin");
console.log("BOTÃO LOGIN:", btnLogin);

if (btnLogin) {

  btnLogin.addEventListener("click", async () => {

    console.log("Botão clicado");

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      mensagem.innerHTML = "Login realizado!";

      window.location.href = "dashboard.html";

    } catch (error) {

      console.error(error);

      mensagem.innerHTML = "Email ou senha inválidos.";

    }

  });

}

const logout = document.getElementById("logout");

if (logout) {

  logout.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";

  });

}
