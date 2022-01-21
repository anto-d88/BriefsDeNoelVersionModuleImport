//MONSTER*****************************************************************************************
//                  M   M  OOO  N   N  SSS  TTTTTT EEEE RRRR 
//                  MM MM O   O NN  N S       TT   E    R   R
//                  M M M O   O N N N  SSS    TT   EEE  RRRR 
//                  M   M O   O N  NN     S   TT   E    R R  
//                  M   M  OOO  N   N SSSS    TT   EEEE R  RR

export function generatMonster(){
let monster = document.createElement("section");
monster.setAttribute("class", "mo");
let barreVie = document.createElement("section");
barreVie.setAttribute("class", "sctbar")
let vieY = document.createElement("section");
vieY.setAttribute("id", "vieY")
let barY = document.createElement("article");
barY.setAttribute("id", "barY");
barY.innerHTML = "100%";
let vieM = document.createElement("section");
vieM.setAttribute("id", "vieM")
let barM = document.createElement("article");
barM.setAttribute("id", "barM");
barM.innerHTML = "100%";
let perso = document.createElement("section");
perso.setAttribute("class", "boxPerso");
let player1 = document.createElement("article");
player1.setAttribute("class", "pla1");
let player2 = document.createElement("article");
player2.setAttribute("class", "pla2");
let sectBut = document.createElement("section");
sectBut.setAttribute("class", "sctBut");
let Dem = document.createElement("button");
Dem.setAttribute("id", "dem");
Dem.innerHTML = "DEMARRER";
let butJeu = document.createElement("section");
butJeu.setAttribute("class", "butJeu");
let attNorm = document.createElement("button");
attNorm.setAttribute("id", "attNorm");
attNorm.innerHTML = "ATTACK";
let attSpec = document.createElement("button");
attSpec.setAttribute("id", "attSpec");
attSpec.innerHTML = "SPECIAL ATTACK";
let soin = document.createElement("button");
soin.setAttribute("id", "soin");
soin.innerHTML = "HEAL";
let aban = document.createElement("button");
aban.setAttribute("id", "aban");
aban.innerHTML = "GIVE UP";
let boxLog = document.createElement("section");
boxLog.setAttribute("class", "modal")
let boxLi = document.createElement("section");
boxLi.setAttribute("class", "modalitem")
let listLog = document.createElement("ul");
listLog.setAttribute("id", "listLog");
listLog.setAttribute("class", "log");

document.body.children[1].appendChild(monster);
monster.appendChild(barreVie);
barreVie.appendChild(vieY);
barreVie.appendChild(vieM);
vieY.appendChild(barY);
vieM.appendChild(barM);
monster.appendChild(perso);
perso.appendChild(player1);
perso.appendChild(player2);
monster.appendChild(sectBut);
sectBut.appendChild(Dem);
sectBut.appendChild(butJeu);
butJeu.appendChild(attNorm);
butJeu.appendChild(attSpec);
butJeu.appendChild(soin);
butJeu.appendChild(aban);
monster.appendChild(boxLog);
boxLog.appendChild(boxLi);
boxLi.appendChild(listLog);
}
generatMonster();

//FONCTION MONSTER******************************************************

export function monsterM(){

let demarr = document.querySelector("#dem")
let abandonne = document.querySelector("#aban");
let attacknorm = document.querySelector("#attNorm");
let attackspec = document.querySelector("#attSpec");
let soigner = document.querySelector("#soin");

    demarr.addEventListener("click", function () {
    document.querySelector("#dem").style.display = "none";
    document.querySelector(".butJeu").style.display = "flex";
    demarrage();
    delet();

    document.querySelector("#attSpec").disabled = false;
    document.querySelector("#attNorm").disabled = false;
    document.querySelector("#soin").disabled = false;
})
function delet(){
    while (listLog.firstChild) {
        listLog.removeChild(listLog.lastChild);
    }newElemLogD(); 
}

abandonne.addEventListener("click", function () {
    document.querySelector(".butJeu").style.display = "none";
    document.querySelector("#dem").style.display = "flex";
    newElemLogA();

 
   
})

attacknorm.addEventListener("click", function () {
    if (attMonster(-1, -1) <= 0 || attYou(5, 10) <= 0) {

        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;
    };
    if (attYou(-1, -1) <= 0 || attMonster(5, 15) <= 0) {

        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;
    };
    newElemLogN();

})

attackspec.addEventListener("click", function () {


    if (attMonster(-1, -1) <= 0 || attYou(10, 20) <= 0) {


        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;
    }
    if (attYou(-1, -1) <= 0 || attMonster(5, 15) <= 0) {

        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;

    }
    newElemLogS();
})
soigner.addEventListener("click", function () {
    soinsY(5, 10);
    newElemLogSoin();
    attMonster(5, 15);
    newElemLogM();
})

function attRandom(min, max) {
    return Math.max(Math.floor(Math.random() * max) + 1, min)
}

function demarrage() {
    let j = 0;
    if (j == 0) {
        j = 1;
        let elem = document.querySelector("#barY");
        let elemM = document.querySelector("#barM");
        let width = "";
        let id = setInterval(frame, 1);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                j = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
                elemM.style.width = width + "%";
                elemM.innerHTML = width + "%";
            }
        }
    }
}
function soinsY(min, max) {
    let elem = document.querySelector("#barY");
    let width = elem.style.width;
    width = width.substring(0, width.length - 1);

    width -= -attRandom(min, max);
    console.log("width");
    if (width > 100) {
        width = 100
    }
    if (width <= 0) {
        width = 0
    }

    elem.style.width = width + "%";

    elem.innerHTML = width + "%";

    return width

}
function attYou(min, max) {
    console.log("player attack")
    let elem = document.querySelector("#barM");
    let width = elem.style.width;
    width = width.substring(0, width.length - 1);
    width -= attRandom(min, max);
    if (width <= 0) {
        width = 0
    }
    elem.style.width = width + "%";
    elem.innerHTML = width + "%";

    return width


}
function attMonster(min, max) {
    console.log("monster attack")
    let elem = document.querySelector("#barY");
    let widthM = elem.style.width;

    widthM = widthM.substring(0, widthM.length - 1);
    widthM -= attRandom(min, max);
    if (widthM <= 0) {
        widthM = 0
    }
    elem.style.width = widthM + "%";
    elem.innerHTML = widthM + "%";

    return widthM

}
function newElemLogD() {
    let newLiD = document.createElement("li");
    newLiD.setAttribute("class", "dlog");
    let logLiD = document.createTextNode("LET GO!");
    listLog.appendChild(newLiD);
    newLiD.appendChild(logLiD);
    document.getElementById('listLog').scrollTop = 10000;
}
function newElemLogA() {
    let newLiA = document.createElement("li");
    newLiA.setAttribute("class", "alog");
    let logLiA = document.createTextNode("GIVE UP!");
    listLog.appendChild(newLiA);
    newLiA.appendChild(logLiA);
    document.getElementById('listLog').scrollTop = 10000;
}
function newElemLogS() {

    let newLiY = document.createElement("li");
    newLiY.setAttribute("class", "mlog");
    let newLiM = document.createElement("li");
    newLiM.setAttribute("class", "nlog");

    let logLiY = document.createTextNode("MONSTER! " + "ATTACK; " + "YOU PV DROPS TO " + barY.textContent);
    let logLiM = document.createTextNode("YOU! " + "SPECIAL ATTACK: " + "MONSTER PV DROPS TO " + barM.textContent);
    listLog.appendChild(newLiM);
    listLog.appendChild(newLiY);
    newLiM.appendChild(logLiM);
    newLiY.appendChild(logLiY);
    if (barY.textContent == "0%") {
        newLiY.innerHTML = "YOU IS GAME OVER!"
        newLiM.innerHTML = " MONSTER IS WINNER!"
    }
    if (barM.textContent == "0%") {
        newLiY.innerHTML = "YOU I SWINNER!"
        newLiM.innerHTML = " MONSTER IS GAME OVER!"
        newLiM.classList.remove("nlog");
        newLiM.classList.add("mlog");
        newLiY.classList.remove("mlog");
        newLiY.classList.add("nlog");
    }

    document.getElementById('listLog').scrollTop = 10000;
}
function newElemLogN() {

    let newLiY = document.createElement("li");
    newLiY.setAttribute("class", "mlog");
    let newLiM = document.createElement("li");
    newLiM.setAttribute("class", "nlog");


    let logLiY = document.createTextNode("MONSTER! " + "ATTACK; " + "YOU PV DROPS TO " + barY.textContent);
    let logLiM = document.createTextNode("YOU! " + "ATTACK: " + "MONSTER PV DROPS TO " + barM.textContent);
    listLog.appendChild(newLiM);
    listLog.appendChild(newLiY);
    newLiM.appendChild(logLiM);
    newLiY.appendChild(logLiY);
    if (barY.textContent == "0%") {
        newLiY.innerHTML = "YOU IS GAME OVER!"
        newLiM.innerHTML = " MONSTER IS WINNER!"
    }
    if (barM.textContent == "0%") {
        newLiY.innerHTML = "YOU IS WINNER!"
        newLiM.innerHTML = "MONSTER IS GAME OVER!"
        newLiM.classList.remove("nlog");
        newLiM.classList.add("mlog");
        newLiY.classList.remove("mlog");
        newLiY.classList.add("nlog");
    }
   

    document.getElementById('listLog').scrollTop = 10000;
}
function newElemLogSoin() {

    let logLiM = document.createTextNode("YOU! " + "CARE: " + "THE PV PV OF YOU TO " + barY.textContent);
    let newLiM = document.createElement("li");
    newLiM.setAttribute("class", "nlog");
    listLog.appendChild(newLiM);
    newLiM.appendChild(logLiM);

    document.getElementById('listLog').scrollTop = 10000;

}
function newElemLogM() {

    let newLiY = document.createElement("li");
    newLiY.setAttribute("class", "mlog");
    let logLiY = document.createTextNode("MONSTER! " + "ATTACK; " + "YOU PV DROPS TO " + barY.textContent);
    newLiY.appendChild(logLiY);
    listLog.appendChild(newLiY);

}
}
monsterM();

export const sectionMonster = document.querySelector(".monst");

sectionMonster.onclick = function () {
    let sectMonster = document.querySelector(".mo");
    document.querySelector(".car").style.display = "none";
    document.querySelector(".li").style.display = "none";
    document.querySelector(".ke").style.display = "none";
    document.querySelector("#contcalendar").style.display = "none";

    sectMonster.style.display = "block";
}

