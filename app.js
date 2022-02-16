function opacityOne(param){
    param.style.opacity="1";
}

let balcon = document.getElementById('balcon');
// balcon.addEventListener("click" , function(){
//     opacityOne(balcon);
// });
let batimentG = document.getElementById('batimentG');
// batimentG.addEventListener("click" , function(){
//     opacityOne(batimentG);
// });
let grue = document.getElementById('grue');
// grue.addEventListener("click" , function(){
//     opacityOne(grue);
// });
let herbe = document.getElementById('herbe');
// herbe.addEventListener("click" , function(){
//     opacityOne(herbe);
// });
let pointe = document.getElementById('pointe');
// pointe.addEventListener("click" , function(){
//     opacityOne(pointe);
// });
let poteau = document.getElementById('poteau');
// poteau.addEventListener("click" , function(){
//     opacityOne(poteau);
// });


let score = 0;

let compteur = document.getElementById('compteur');
console.log(compteur);

let elt = document.getElementById("compteur");


function addscore(){
    score++;
}
function showscore(){
    elt.textContent="Le score est : " +score+" sur "+parseInt(erreurs.length+1);
}



let erreurs = [balcon, batimentG, grue, herbe, pointe, poteau]
for (let i=0; i < erreurs.length; i++){
    erreurs[i].addEventListener("click" , function(){
        opacityOne(erreurs[i]);
        addscore();
        showscore();
        console.log(elt.textContent);
    });
}
// .removeEventListener();  ???????

function opacityZero(param){
    param.style.opacity="0";
}

let batimentD = document.getElementById('batimentD');
batimentD.addEventListener("click" , function(){
    opacityZero(batimentD);
    addscore();
    showscore();
    console.log(elt.textContent)
});
