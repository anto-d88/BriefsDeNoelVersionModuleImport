//               TTTTTT  OOO   OOO  DDD   OOO 
//                 TT   O   O O   O D  D O   O
//                 TT   O   O O   O D  D O   O
//                 TT   O   O O   O D  D O   O
//                 TT    OOO   OOO  DDD   OOO 
//LISTE DE COURSE***************************************************


export function generatLsteDeCours() {
    let listeDeCourse = document.createElement("section");
    listeDeCourse.setAttribute("class", "li");
    listeDeCourse.setAttribute("id", "mySect");
    let boxTitleLi = document.createElement("section");
    boxTitleLi.setAttribute("class", "entete");
    let titleList = document.createElement("h2");
    titleList.innerHTML = "Liste de Course";
    let espaceText = document.createElement("input");
    espaceText.setAttribute("type", "text");
    espaceText.setAttribute("id", "myText");
    espaceText.setAttribute("placeholder", "Title...");
    let boutAddList = document.createElement("span");
    boutAddList.setAttribute("onclick", "newElemList()");
    boutAddList.setAttribute("class", "addBtn");
    boutAddList.innerHTML = "Add"

    let listeUl = document.createElement("ul");
    listeUl.setAttribute("id", "myList");
    listeUl.setAttribute("class", "uliste");


    document.body.children[1].appendChild(listeDeCourse);
    listeDeCourse.appendChild(boxTitleLi);
    boxTitleLi.appendChild(titleList);
    boxTitleLi.appendChild(espaceText);
    boxTitleLi.appendChild(boutAddList);
    listeDeCourse.appendChild(listeUl);
}
generatLsteDeCours();

//NOUVEL ELEMENT DE LIST***************
export function newElemList() {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "nli");
    let inputText = document.getElementById("myText").value;
    let textLi = document.createTextNode(inputText);
    newLi.appendChild(textLi);
    if (inputText === '') {
        alert("Ecrivez dans le champs Title...");
    }
    else {
        document.getElementById("myList").appendChild(newLi);
    }
    document.getElementById("myText").value = "";

    // BOUTON DE SUPPRESSION************


    let nodeList = document.getElementsByClassName("nli");
    for (i = 0; i < nodeList.length; i++) {
        let span = document.createElement("SPAN");
        let croi = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(croi);
        nodeList[i].appendChild(span);
    }

    // //CLICK SUPRESSION DE LI*************
    let close = document.getElementsByClassName("close");
    for (let j = 0; j < close.length; j++) {
        close[j].onclick = function () {
            let parents = this.parentElement;
            parents.style.display = "none";
        }
    }
    //SYMBOLE V POUR ELEMENT COCHER**************
    let cocher = document.querySelector(".uliste");
    cocher.addEventListener("click", function (petitV) {
        if (petitV.target.tagName === "LI") {
            petitV.target.classList.toggle("checked");
        }
    }, false);

}

export const sectionList = document.querySelector(".list");


sectionList.onclick = function () {
    let sectLi = document.querySelector(".li");
    document.querySelector(".car").style.display = "none";
    document.querySelector(".ke").style.display = "none";
    document.querySelector(".mo").style.display = "none";
    sectLi.style.display = "block";
}