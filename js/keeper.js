//              K  K EEEE EEEE PPPP  EEEE RRRR 
//              K K  E    E    P   P E    R   R
//              KK   EEE  EEE  PPPP  EEE  RRRR 
//              K K  E    E    P     E    R R  
//              K  K EEEE EEEE P     EEEE R  RR
//KEEPER**********************************************************

export function generatKeeper() {

    let keeper = document.createElement("section");
    keeper.setAttribute("class", "ke");
    let titleKeeper = document.createElement("h1");
    titleKeeper.innerHTML = "Score Keeper";
    let scoreJ1toJ2 = document.createElement("h3");
    scoreJ1toJ2.innerHTML = "Score:";
    let pTo = document.createElement("span");
    pTo.setAttribute("class", "to");
    pTo.innerHTML = " to ";
    let scoreJ1 = document.createElement("span");
    scoreJ1.setAttribute("id", "scoreJ1");
    scoreJ1.innerHTML = 0;
    let scoreJ2 = document.createElement("span");
    scoreJ2.setAttribute("id", "scoreJ2");
    scoreJ2.innerHTML = 0;
    let boxbutkeeper = document.createElement("section");
    boxbutkeeper.setAttribute("class", "butKeeper");
    let boutJ1 = document.createElement("button");
    boutJ1.setAttribute("id", "btJ1");
    boutJ1.innerHTML = "JOUEUR 1";
    let boutJ2 = document.createElement("button");
    boutJ2.setAttribute("id", "btJ2");
    boutJ2.innerHTML = "JOUEUR 2";
    let resetKeeper = document.createElement("button");
    resetKeeper.setAttribute("id", "reset");
    resetKeeper.innerHTML = "Reset";
    let scoreChoi = document.createElement("input");
    scoreChoi.setAttribute("type", "number");
    scoreChoi.setAttribute("id", "limit");
    scoreChoi.setAttribute("value", 0);
    let vinqueur = document.createElement("h3");
    vinqueur.innerHTML = "The winner is:";
    let afficheV = document.createElement("span");
    afficheV.setAttribute("id", "winner");
    afficheV.innerHTML = 0;





    document.body.children[1].appendChild(keeper);
    keeper.appendChild(titleKeeper);
    keeper.appendChild(scoreChoi);
    keeper.appendChild(scoreJ1toJ2);
    scoreJ1toJ2.appendChild(scoreJ1);
    scoreJ1toJ2.appendChild(pTo);
    scoreJ1toJ2.appendChild(scoreJ2);
    keeper.appendChild(boxbutkeeper);
    boxbutkeeper.appendChild(boutJ1);
    boxbutkeeper.appendChild(resetKeeper);
    boxbutkeeper.appendChild(boutJ2);
    keeper.appendChild(vinqueur);
    vinqueur.appendChild(afficheV);
}
generatKeeper();


// FONCTION SCORE KEEPER**************************************


export function keeperF(){
    let but1 = document.querySelector("#btJ1");
let pl1 = document.querySelector("#scoreJ1");
let scoreValueJ1 = 0;

let but2 = document.querySelector("#btJ2");
let pl2 = document.querySelector("#scoreJ2");
let scoreValueJ2 = 0;

let reset = document.querySelector("#reset");

let inputChange = document.querySelector("#limit");

let winner = document.querySelector("#winner");

but1.addEventListener("click", function () {
    let limit = document.querySelector("#limit").value;
    scoreValueJ1++;
    pl1.innerHTML = scoreValueJ1;
    if (scoreValueJ1 == limit || (scoreValueJ1 > scoreValueJ2 && scoreValueJ1 > limit)) {
        pl1.classList.add("green");
        but1.setAttribute("disabled", "true");
        but2.setAttribute("disabled", "true");
        printWin();
    }
});

but2.addEventListener("click", function () {
    let limit = document.querySelector("#limit").value;
    scoreValueJ2++;
    pl2.innerHTML = scoreValueJ2;
    if (scoreValueJ2 == limit || (scoreValueJ2 > scoreValueJ1 && scoreValueJ2 > limit)) {
        pl2.classList.add("green");
        but1.setAttribute("disabled", "true");
        but2.setAttribute("disabled", "true");
        printWin();

    }
});

reset.addEventListener("click", function () {
    but1.removeAttribute("disabled");
    but2.removeAttribute("disabled");

    pl1.classList.remove("green");
    pl2.classList.remove("green");

    scoreValueJ1 = 0;
    scoreValueJ2 = 0;

    pl1.innerHTML = scoreValueJ1;
    pl2.innerHTML = scoreValueJ2;

    document.querySelector("#limit").value = 0;

    winner.innerHTML = "";
});

inputChange.addEventListener("change", function () {

    pl1.innerHTML = 0;
    pl2.innerHTML = 0;
    pl1.classList.remove("green");
    pl2.classList.remove("green");


});

function printWin() {

    if (scoreValueJ1 > scoreValueJ2) {
        winner.innerHTML = "Player 1";
        winner.classList.add("green");
    }
    else {
        winner.innerHTML = "Player 2";
        winner.classList.add("green");
    }
}}
keeperF()

export const sectionKeep = document.querySelector(".keep");


sectionKeep.onclick = function () {
    let sectKeep = document.querySelector(".ke");
    document.querySelector(".car").style.display = "none";
    document.querySelector(".li").style.display = "none";
    document.querySelector(".mo").style.display = "none";
    sectKeep.style.display = "block";
}