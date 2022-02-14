class Animal {
    constructor(nombreDePattes, poids) {
        this.nombreDePattes = nombreDePattes;
        this.poids = poids;
    }
    sePresenter() {
        console.log(`Cet animal à ${this.nombreDePattes} pattes et pèse ${this.poids}Kg.`)
    }
}
var vache = new Animal(4, 10);
vache.sePresenter(); // Cet animal à 4 pattes et pèse 10Kg.

class Oiseau extends Animal { // extends Animal équivaut à : Oiseau.protoype = Object.create(Animal.prototype)
    constructor(nombreDePattes, poids, tailleDesAiles) {
        super(nombreDePattes, poids); // équivaut à : Animal.call(this, nombreDePattes, poids)
        this.tailleDesAiles = tailleDesAiles;
    }
    voler() {
        console.log("Cet animal vole !") //sera disponible seulement pour les oiseaux et non pas dans l'objet vache par exemple
    }
}
var perroquet = new Oiseau(2, 2, 'petites');
console.log(perroquet); // Oiseau {nombreDePattes: 2, poids: 2, tailleDesAiles: 'petites'}
perroquet.sePresenter(); // Cet animal à 2 pattes et pèse 2Kg.
perroquet.voler(); // Cet animal vole !
