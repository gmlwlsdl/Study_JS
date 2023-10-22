const clock = document.querySelector("#clock");


function setTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");


    clock.innerText = (`${hours}:${minutes}:${second}`);
}

setTime();
setInterval(setTime, 1000)