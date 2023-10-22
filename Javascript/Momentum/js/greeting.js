const loginForm=document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

const Hidden_classname = "hidden";
const User = "username";

function submitLogin(event){
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add(Hidden_classname);
    localStorage.setItem(User,username);
    console.log(username);
    setUsername(username);
}

function setUsername(username){
    greeting.classList.remove(Hidden_classname);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(User);

if(savedUsername == null){ 
    loginForm.classList.remove(Hidden_classname);
    loginForm.addEventListener("submit",submitLogin);
} else {    
   setUsername(savedUsername);
}
