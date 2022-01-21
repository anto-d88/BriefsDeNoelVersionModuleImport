export function generatCalandar() {

    let boxCalandar = document.createElement("section");
    boxCalandar.setAttribute("id", "contcalendar");
   

    document.body.children[1].appendChild(boxCalandar);

    
}
generatCalandar();
// export function myCalandar(){
 export function calendar() {
     
     var monthNames= ['Jan','Fev','Mar','Avr','Mai','Jui','Juil','Aou','Sep','Oct','Nov','Dec'];
     var jours= ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
     var monthDays= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     var today= new Date();
     var thisDay= today.getDate();
     var thisMonth= today.getMonth();
     var year= today.getYear();
     year <= 200 ? year += 1900 : null;
     console.log(today.toString());
     
     if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
         monthDays[1] = 29;
        }
        var nDays= monthDays[today.getMonth()];
        var firstDay= today;
            firstDay.setDate(0);
        
        firstDay.getDate() == 2 ? firstDay.setDate(0) : null;
    
    var startDay = firstDay.getDay();
    console.log(firstDay)
    var tb= document.createElement('table');
    
    var tbr= tb.insertRow(-1);

    var tbh= document.createElement("th");
    tbh.setAttribute('colspan','7');
    var tbhtxt= document.createTextNode(monthNames[thisMonth]+'.'+year);
    tbh.appendChild(tbhtxt);

    tbr.appendChild(tbh);

    var tbr=tb.insertRow(-1);

    for(var i=0 ;i<jours.length ; i++){

            tbr.insertCell(-1).appendChild(document.createTextNode(jours[i]));
    }

    var tbr= document.createElement("tr");

    var column= 0;

    for (var i= 0; i < startDay; i++) {
            tbr.insertCell(0);
            column++;
    }

    for (var i = 1; i <= nDays; i++) {
    
            var tdd= tbr.insertCell(-1);

            i == thisDay ? tdd.style.color="#FF0000" : null;

            tdd.appendChild(document.createTextNode(i));

            column++;
            if (column == 7) {
                    tb.appendChild(tbr);
                    var tbr=document.createElement("tr");
                    column = 0;
            }

            i == nDays ? tb.appendChild(tbr) : null;

    }
    document.getElementById('contcalendar').appendChild(tb);
};


typeof window.addEventListener == 'undefined' ? window.attachEvent("onload",calendar) : addEventListener('load',calendar,false);

// }
export const sectionCalandar = document.querySelector(".cal");

sectionCalandar.onclick = function () {
    let sectCal = document.querySelector("#contcalendar");
    document.querySelector(".li").style.display = "none"
    document.querySelector(".ke").style.display = "none"
    document.querySelector(".mo").style.display = "none"
    document.querySelector(".car").style.display = "none"
    sectCal.style.display = "block";
}