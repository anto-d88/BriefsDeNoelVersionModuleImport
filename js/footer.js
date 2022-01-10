const info = {
    liste01: "<li class='info'>Infos contact:</li><li>Robles Soler</li><li>Antonio</li><li>Simplon haut de france</li>",
    liste02: "<li>07.82.76.03.31</li><li>59200</li><li>Tourcoing</li><li>antonio_robles_88@outlook.com</li>",
}
export function generatFooter() {

    let infoFooterLeft = document.createElement("ul");
    infoFooterLeft.innerHTML = info.liste01;

    let infoFooterRight = document.createElement("ul");
    infoFooterRight.innerHTML = info.liste02;

    document.body.children[2].appendChild(infoFooterLeft);
    document.body.children[2].appendChild(infoFooterRight);

}
generatFooter();