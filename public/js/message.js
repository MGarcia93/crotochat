import {user} from "./auth.js";
const list= document.getElementById("listMessages");
const message= document.getElementById("txtMessage");
export const guardarMensaje=()=>{
    if(message.value.trim()==""){
        return;
    }
    const record={
        avatar:user.photoURL,
        name:user.displayName,
        text:message.value
    }
    const db = firebase.database();
    db.ref("mensajes").push().set(record,(error)=>{
        if(error){
            alert("no se pudo enviar el mensaje");
            console.error(error);
        }
    });
    message.value="";
}
export const actulizarLista = ()=>{
    console.log("actulizar");
    list.innerHTML="";
    const db = firebase.database();
    db.ref("mensajes").on("child_added",(record)=>{
        list.innerHTML+=`<li>
            <strong><img src="${record.val().avatar}" class="cycle">${record.val().name} :</strong>${record.val().text}</strong>
        </li>`
        let last = list.querySelector("li:last-child");
        console.log(record.val());
        last.scrollIntoView();
    });
}