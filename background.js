const body = document.querySelector("body");

const IMG_NUMBER = 3;

function displayImg(imgNumber){
    const image = new Image();
    image.src =`img/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
function getNumber(){
    const random = Math.random();
    const myNumber = Math.floor((random*4)+1);
    return myNumber;
}

function init(){
    const randomNumber = getNumber();
    displayImg(randomNumber);
}
init();