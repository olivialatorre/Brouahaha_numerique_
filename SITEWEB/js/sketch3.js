let data;
let taille = ['grand', 'moyen'];
let couleur = ['rouge', 'bleu', 'vert'];
let marge = ['grandeMarge', 'moyenneMarge', 'petiteMarge'];
let rotation = ['rotation1', 'rotation2', 'rotation3'];
function preload() {
  data = loadJSON("data.json");
}


function setup(){
	let smsListe = data.corpus.sms;
  console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 
  console.log(random(smsListe)); //affiche le premier sms
  let texte = random(smsListe).cont;
    let sms = random(smsListe);

   

  

   for (let i=0; i< smsListe.length/5; i++){
    let smsData = smsListe[i];
    let texte = smsData.cont;







    if(typeof texte == 'object'){
    texte = texte.__text;
   } 

   

    let p= createP(texte);
    p.addClass(random(taille));
    p.addClass(random(couleur));
    p.addClass(random(marge));
    p.addClass(random(rotation));

    let c = 'rgb( couleur[random],couleur[random] , couleur[random]) '
p.style('color', c);
let top = random(0, 55)+'px'
p.style('top', top);
    
}
}