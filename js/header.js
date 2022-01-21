export function generatHeader() {

    let boutonCarousel = document.createElement("button");
    boutonCarousel.setAttribute("class", "sectcar")
    boutonCarousel.innerHTML = "Carousel";

    let boutonList = document.createElement("button");
    boutonList.setAttribute("class", "list")
    boutonList.innerHTML = "Liste";

    let boutonKeeper = document.createElement("button");
    boutonKeeper.setAttribute("class", "keep");
    boutonKeeper.innerHTML = "Keeper";

    let boutonMonster = document.createElement("button");
    boutonMonster.setAttribute("class", "monst");
    boutonMonster.innerHTML = "Monster";
    
    let boutonCalandar = document.createElement("button");
    boutonCalandar.setAttribute("class", "cal");
    boutonCalandar.innerHTML = "Calandar";


    document.body.firstElementChild.appendChild(boutonCarousel);
    document.body.firstElementChild.appendChild(boutonList);
    document.body.firstElementChild.appendChild(boutonKeeper);
    document.body.firstElementChild.appendChild(boutonMonster);
    document.body.firstElementChild.appendChild(boutonCalandar);

}
generatHeader();