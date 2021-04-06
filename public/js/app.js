import {deslogearConGoogle,logerarConGoogle,comprobarUsuario} from "./auth.js";
import { guardarMensaje } from "./message.js";

const btnLogin = document.getElementById("login");
const btnLogout = document.getElementById("logout");
const btnPushMessage =  document.getElementById("pushMessage")

btnLogin.onclick = (e) => {
    e.preventDefault();
    logerarConGoogle();
}
btnLogout.onclick = (e) => {
    e.preventDefault();
    deslogearConGoogle();
}


pushMensaje.onclick=(e)=>{
    e.preventDefault();
    guardarMensaje();
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);   
    comprobarUsuario();
});