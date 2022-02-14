"use strict";
function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
}
Animal.prototype.sePresenter = function() {
    console.log(`Cet animal possède ${this.nombreDePattes} pattes et il pèse ${this.poids}.`)
}

function Oiseau(nombreDePattes, poids, longeurDesAiles) {
    Animal.call(this, nombreDePattes, poids); //la méthode Call permet d'heriter des propriétés d'un autre constructeur. En premier parametre on met l'objet actuel this (peroquet ou vache), ensuite on met les arguments de notre constructeur appelé (Animal)
    this.longeurDesAiles = longeurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype); //permet au constructeur Oiseau d'hériter du même prototype que le constructeur Animal et donc de la méthode sePresenter
Oiseau.prototype.constructor = Oiseau; //permet à l'Objet créé (perroquet) de recuperer son constructeur Oiseau qu'il avait perdu en héritant du constructeur Animal

function Mammifere(nombreDePattes, poids, typeDePoil) {
    Animal.call(this, nombreDePattes, poids)
    this.typeDePoil = typeDePoil;
}

let perroquet = new Oiseau(2, "5kg", "petites"); // => Oiseau {nombreDePattes: 2, poids: '5kg', longeurDesAiles: 'petites'}
console.log(perroquet);

let vache = new Mammifere(4, "100kg", "lisse");  // => Mammifere {nombreDePattes: 4, poids: '100kg', typeDePoil: 'lisse'}
console.log(vache);

perroquet.sePresenter() // => Cet animal à 2 pattes et il pèse 5kg.
// vache.sePresenter()  // => erreur car vache n'a pas le prototype sePresenter