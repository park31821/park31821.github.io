const clockContainer = document.querySelector(".js-clock"),
    dateTitle = clockContainer.querySelector("h1");
    clockTitle = clockContainer.querySelector("h2");

const DAY = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTH = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

function getDate(){
    const now = new Date();
    const day = DAY[now.getDay()];
    const date = now.getDate();
    const month = MONTH[now.getMonth()];
    const year = now.getFullYear();

    dateTitle.innerText = `${day} ${date < 10 ? `0${date}`:`${date}`} ${month} ${year}`;
}

function getTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : `${hours}`
      }:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
        seconds < 10 ? `0${seconds}` : `${seconds}`
      }`;
}

function init(){
    getDate();
    getTime();
    setInterval(getTime,1000);

}

init(); 

