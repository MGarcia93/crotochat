import { actulizarLista } from "./message.js";

const name = document.getElementById("name");
const avatar = document.getElementById("avatar");
const email = document.getElementById("email");
const messages = document.getElementById("messages");
const btnLogin = document.getElementById("login");
const btnLogout = document.getElementById("logout");
export let user = {};
export const logerarConGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log(`logeo ${result.user.email}`);
            user = result.user;
            lokearUsuario();
        }).catch((error) => {
            console.error(error);
        });
}
export const deslogearConGoogle = () => {
    firebase.auth().signOut().then(() => {
        console.log("chau");
        // Sign-out successful.

    }).catch((error) => {
        // An error happened.
        console.log(error)
    });
}

const init = () => {
    //datos iniciales a mostar
    avatar.src = "./img/avatar.jpg";
    name.innerText = "Bienvenido";
    email.innerText = "Crotochat: Un chat echo para aprender a usar firebase";
    mensajes.classList.add("off");
    btnLogout.classList.add("off");
    btnLogin.classList.remove("off");
}
const lokearUsuario = () => {
    avatar.src = user.photoURL;
    name.innerText = user.displayName;
    email.innerText = user.email;
    messages.classList.remove("off");
    btnLogout.classList.remove("off");
    btnLogin.classList.add("off");    
    actulizarLista();
}
export const comprobarUsuario = () => {
    firebase.auth().onAuthStateChanged((userLog) => {
        if (userLog) {
            // User is signed in.
            user = userLog;
            lokearUsuario();
        } else {
            // No user is signed in.
            init();
        }
    });
}