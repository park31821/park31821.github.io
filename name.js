
const nameContainer = document.querySelector(".js-name"),
    inputName = nameContainer.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const NAME_LS = "userName";
const SHOWING_ON = "showing";

function askName(){
    nameContainer.classList.add(SHOWING_ON);
    nameContainer.addEventListener("submit",handleSubmit);

}

function handleSubmit(event){
    event.preventDefault();
    const currentName = inputName.value;
    displayGreetings(currentName);
    setName(currentName);
}

function displayGreetings(text){
    nameContainer.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;

}
function setName(text){
    localStorage.setItem(NAME_LS,text); 
}
function getName(){
    const yourName = localStorage.getItem(NAME_LS);

    if(yourName === null){
        askName();
    }else{
        displayGreetings(yourName);
    }
}

function init(){
    getName();

}

init();
