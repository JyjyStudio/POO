// Call et Apply permettent d'invoquer immediatement une fonction

//Call : prend les arguments 1 par 1 

// Animal.call(this, nombreDePattes, poids);
let gandalf = { titre : 'magicien' }

function direBonjour() {
    console.log(`Bonjour ${this.titre}`);
}

//direBonjour(); // => TypeError: Cannot read properties of undefined (reading 'titre') at direBonjour
direBonjour.call(gandalf); // => Bonjour magicien car this devient gandalf
direBonjour.apply(gandalf); // => Bonjour magicien car this devient gandalf

//Apply : a besoin soit d'un argument ou bien d'un tableau pour passer plusieurs arguments.

function direBonjour2(arme, degats) {
    console.log(`Bonjour ${this.titre}, vous possedez ${arme} qui donne ${degats} points de degats.`);
}
direBonjour2.apply(gandalf,['un baton', 75]); // => Bonjour magicien, vous possedez un baton qui donne 75 points de degats. 
direBonjour2.call(gandalf,'un baton', 75); // => Bonjour magicien, vous possedez un baton qui donne 75 points de degats.


// Bind 
// Objectif : changer le contexte de "this"

// exemple 1 :

const User = {
    prenom : "Jyhad",
    nomComplet () {
        console.log(`Hello ${this.prenom}.`);
    }
}

// let test = User.nomComplet; => TypeError: Cannot read properties of undefined (reading 'prenom') at nomComplet
let test = User.nomComplet.bind(User); // => Je m'appelle Jyhad.
test();

//exemple 2: 

this.valeur = "window";
let monObjet = {
    valeur : "Objet",
    getValue : function() {
        console.log(this.valeur);
    }
}
monObjet.getValue(); // => Objet

let maValeur = monObjet.getValue;
maValeur(); // => window

let maValeurAvecBind = monObjet.getValue.bind(monObjet)
maValeurAvecBind() // => Objet