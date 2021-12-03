//importar paquetes :3
//configuración de firebase
import {getFirebaseConfig} from './firebase-config.js';
//modulos firebase a utilizar
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

import { initializeApp } from 'firebase/app';

//Obtener la config de firebase
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

//atributos
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login_btn");

//métodos
function loginEvent (e, ev){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentials) => {
        console.log(userCredentials);
        window.location.href = "index.html";
    })
    .catch((error) => {
        console.log(error.message);
    });
}

loginBtn.addEventListener("click", loginEvent);

