const clock = document.querySelector("#clock");


function setTime(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setTime();
setInterval(setTime, 1000)