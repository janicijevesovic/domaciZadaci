import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ulChatList = document.querySelector('#msgUL');
let inputSend = document.getElementById("inputSend");
let btnSend = document.getElementById("btnSend");
let inputUsername = document.getElementById("inputUsername");
let btnUsername = document.getElementById("btnUsername");
let navRooms = document.querySelector('nav');
let outputUsername = document.querySelector('#outputUsername');
let navLinks = document.querySelectorAll('a');


// Citamo iz lokalne memorije username, ukoliko postoji, u suprotnom default username je anonymous
let username = () => {
    if (localStorage.username) {
        return localStorage.username;
    }
    else {
        return "anonymous";
    }
}

// Citamo iz lokalne memorije room, ukoliko postoji, u suprotnom default room je general
let room = () => {
    if (localStorage.room) {
        return localStorage.room;
    }
    else {
        return "general";
    }
}

// Kreiramo objekat klase Chatroom

let chatroom2 = new Chatroom(room(), username());

// Kreiranje objekta klase ChatUI

let chatUI1 = new ChatUI(ulChatList);

// Kada se ucitava stranica po prvi put, ispisuju se cetovi na njoj
chatroom2.getChats(data => {
    chatUI1.templateLI(data);
});

// Kada se klikne dugme posalji poruku
btnSend.addEventListener('click', () => {
    if (inputSend.value == "") {
        alert("Ne moze se poslati prazna poruka");
    }
    else {
        chatroom2.addChat(inputSend.value)
        .then(() => inputSend.value = "")
        .catch(error => console.log(error));
    }   
});

// Kada se klikne na dugme promeni se username
btnUsername.addEventListener('click', () => {
    chatroom2.updateUsername(inputUsername.value);
    inputUsername.value = "";
    outputUsername.innerHTML = `Username: ${chatroom2.username}`;
    setTimeout(() => {
        outputUsername.innerHTML = "";
    }, 3000);
    chatUI1.clear();
    chatroom2.getChats(data => {
        chatUI1.templateLI(data);
    });
});

//// Dugmad za promenu soba
navRooms.addEventListener('click', e => {
    if (e.target.tagName == "A") {
        navLinks.forEach(link => {
            link.classList.remove("selected");
        });
        let selectedLink = e.target;
        //1. Izbrisati sve poruke sa ekrana
        chatUI1.clear();
        //2. Pozvati promenu sobe
        // console.log(e.target.id);
        chatroom2.updateRoom(e.target.id);
        selectedLink.classList.add("selected");
        // 3. Prikazati cetove
        chatroom2.getChats(data => {
            chatUI1.templateLI(data);
        });
    }
});
