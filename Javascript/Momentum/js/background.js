const bck_img = document.querySelector("#bck_img");
const images = [
    "galaxy.jpg",
    "hambrug.jpg",
    "landscape.jpg",
    "mountains.jpg",
    "winter.jpg"
];

const randImg = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");
const css = "back_img";

// bck_img.classList.add(css);
bgImg.src=`img/${randImg}`;

bck_img.append(bgImg);