
const imageCarousel = {

    image01: '<img class="active" src="img/image01.jpg" alt="street_fighter"><img src="img/image02.png" alt="street_fighter"><img src="img/image03.jpg" alt="street_fighter">',
    boutLeft: '<p class="left"><</p>',
    boutRight: '<p class="right">></p>'
}

export function generatCarousel() {

    let mainCarousel = document.createElement("section");
    mainCarousel.setAttribute("class", "car");
    let fondCarousel = document.createElement("section");
    fondCarousel.setAttribute("class", "fond");
    let Box = document.createElement("figure");
    Box.setAttribute("class", "carousel");
    Box.innerHTML = imageCarousel.image01;
    let boxButleft = document.createElement("section");
    boxButleft.setAttribute("class", "butleft")
    boxButleft.innerHTML = imageCarousel.boutLeft;
    let boxButright = document.createElement("section");
    boxButright.setAttribute("class", "butleft")
    boxButright.innerHTML = imageCarousel.boutRight;
    let boxbut = document.createElement("section");
    boxbut.setAttribute("class", "boxButton")

    document.body.children[1].appendChild(mainCarousel);
    mainCarousel.appendChild(fondCarousel);
    fondCarousel.appendChild(boxbut);
    boxbut.appendChild(boxButleft);
    boxbut.appendChild(boxButright);
    fondCarousel.appendChild(Box);

}
generatCarousel()

//CLICK DES  BOUTONS DU CAROUSEL**********************************************

const item = document.querySelectorAll("img");
const nomSlide = item.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");

let count = 0;

export function slideSuivante() {
    item[count].classList.remove("active");

    if (count < nomSlide - 1) {
        count++;
    }
    else {
        count = 0;
    }
    item[count].classList.add("active")
}

suivant.addEventListener('click', slideSuivante);

export function slidePrecedente() {
    item[count].classList.remove("active");

    if (count > 0) {
        count--;
    }
    else {
        count = nomSlide - 1;
    }
    item[count].classList.add("active")
}

precedent.addEventListener('click', slidePrecedente);

export const sectionCarousel = document.querySelector(".sectcar");

sectionCarousel.onclick = function () {
    let sectCar = document.querySelector(".car");
    document.querySelector(".li").style.display = "none"
    document.querySelector(".ke").style.display = "none"
    document.querySelector(".mo").style.display = "none"
    document.querySelector("#contcalendar").style.display = "none";

    sectCar.style.display = "flex";
}