const images = [
    "france.jpg",
    "galaxy.jpg",
    "hambrug.jpg"
];

const randImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src=`img/${randImg}`;

document.body.append(bgImg);