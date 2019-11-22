var nbEssai=0;
var EssaiMax=10;
var valeur = document.getElementById("text");
var btn = document.getElementById("btn");
var resultat = document.getElementById("resultat");
var nbUse = document.getElementById("nbUse");
var random = Math.floor(Math.random()*100);
var random2 = Math.floor(Math.random()*200);
var random3 = Math.floor(Math.random()*500);
var lv1 = document.getElementById("lv1");
var lv2 = document.getElementById("lv2");
var lv3 = document.getElementById("lv3");
var nv1 = document.getElementById("nv1");
var nv2 = document.getElementById("nv2");
var nv3 = document.getElementById("nv3");
var image = document.getElementById("images");
var img1 = document.getElementById("img1");
var h3 = document.getElementById("h3");
var essais = document.getElementById("essais");
essais.style.fontSize = "30px";
console.log(random);


function refresh() {
    nbEssai=0;
    EssaiMax=10;
    random = Math.floor(Math.random()*100);
    console.log(random);
}


function refresh2() {
    nbEssai=0;
    EssaiMax=10;
    random2 = Math.floor(Math.random()*300) ;
    console.log(random2);
}

function refresh3() {
    nbEssai=0;
    EssaiMax=10;
    random3 = Math.floor(Math.random()*500) ;
    console.log(random3);
}


function p(){
    var liste = document.createElement("p");
    nbUse.appendChild(liste);
    liste.innerHTML=valeur.value;
    nbEssai++
}


lv1.addEventListener("click", function () {
    nv1.style.display = "block";
    nv2.style.display = "none";
    nv3.style.display = "none";
    btn.addEventListener('click', function () {
        essais.innerHTML = "Il te reste "+ EssaiMax + "essais courage";

        if (valeur.value < random){
            EssaiMax= EssaiMax-1;
            resultat.innerHTML = "c'est plus";
            p();
        }else if (valeur.value > random) {
            EssaiMax = EssaiMax - 1;
            resultat.innerHTML = "c'est moins";
            p();
        }else{
            resultat.innerHTML = "c'est WIN en "+ nbEssai + " coups";
            refresh();
        }

        if(EssaiMax === 0){
            resultat.innerHTML = "C'est loose PD";
            refresh();
        }
    });
});

lv2.addEventListener("click", function () {
    nv1.style.display = "none";
    nv2.style.display = "block";
    nv3.style.display = "none";
    btn.addEventListener('click', function () {
        essais.innerHTML = "Il te reste "+ EssaiMax + " essais imbécile";

        if (valeur.value < random2){
            EssaiMax= EssaiMax-1;
            resultat.innerHTML = "c'est plus";
            p();
        }else if (valeur.value > random2) {
            EssaiMax = EssaiMax - 1;
            resultat.innerHTML = "c'est moins";
            p();
        }else{
            resultat.innerHTML = "c'est WIN en "+ nbEssai + " coups";
            refresh2();
        }

        if(EssaiMax === 0){
            resultat.innerHTML = "C'est loose tu n'es qu'un ZERO, une victime , un gros CON";
            refresh2();
        }
    });
});

lv3.addEventListener("click", function () {
    nv1.style.display = "none";
    nv2.style.display = "none";
    nv3.style.display = "block";
    btn.addEventListener('click', function () {
        essais.innerHTML = "Il te reste "+ EssaiMax + " essais petit con";

        if (valeur.value < random3){
            EssaiMax= EssaiMax-1;
            resultat.innerHTML = "c'est plus";
            p();
        }else if (valeur.value > random3) {
            EssaiMax = EssaiMax - 1;
            resultat.innerHTML = "c'est moins";
            p();
        }else{
            resultat.innerHTML = "c'est WIN en "+ nbEssai + " coups";
            refresh3();
        }

        if(EssaiMax === 0){
            resultat.innerHTML = "Rentre chez toi meme un aspicot est meilleur que toi!!!";
            refresh3();
        }
    });
});
