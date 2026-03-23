let data;
let style = ['clignote','ventquipasse','grossepolice','ventquipasse2'];
let couleur = ['rouge', 'bleu', 'vert'];
let marge = ['grandeMarge', 'moyenneMarge', 'petiteMarge'];
let rotation = ['rotation1', 'rotation2', 'rotation3'];
let borderradius = ['borderRadius1', 'borderRadius2', 'borderRadius3'];
function preload() {
  data = loadJSON("data.json");
}


function setup(){
	let smsListe = data.corpus.sms;
  console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 
  console.log(random(smsListe)); //affiche le premier sms
  let texte = random(smsListe).cont;
    let sms = random(smsListe);

   

  

  //  for (let i=0; i< smsListe.length; i++){
    // let smsData = smsListe[i];
    // let texte = smsData.cont;
let max = 100; // ou 30

for (let i = 0; i < max; i++){
  let smsData = random(smsListe);
  let texte = smsData.cont;






    if(typeof texte == 'object'){
    texte = texte.__text;
   } 

   

    let p= createP(texte);
    p.addClass(random(borderradius));
    p.addClass(random(style));
    p.addClass(random(couleur));
    p.addClass(random(marge));
    p.addClass(random(rotation));

    let c = 'rgb( couleur[random],couleur[random] , couleur[random]) '
p.style('color', c);
let top = random(0, window.innerHeight) + 'px';
p.style('top', top);
let duration = random(3, 5) + 's';
p.style('animation-duration', duration);


document.querySelectorAll('.clignote').forEach(el => {
  el.style.setProperty('--x', Math.random());
  el.style.setProperty('--y', Math.random());

  // variation taille
  el.style.fontSize = (Math.random() * 10 + 5) + 'px';

  // variation vitesse
  el.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
});
// let top = random(0, 55)+'px'
// p.style('top', top);
    
}
}