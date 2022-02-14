"use strict"
class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }
    get informations() {
        return `${this.pseudo} le ${this.classe} à ${this.sante} points de vie et est au niveau ${this.niveau}.`
    }
    evoluer() {
        this.niveau++
        console.log(`${this.pseudo} passe au niveau ${this.niveau} !`)
    }
    verifierSante() {
        if(this.sante <= 0) {
            this.sante = 0;
            console.log(`${this.pseudo} n'a plus de points de vie, il à perdu !`);
        } else {
            console.log(`Il reste ${this.sante} points de vie à ${this.pseudo}.`)
        }
    }
}

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, 'Magicien', 170, 90);
    }
    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} en lançant un sort (${this.attaque} points de dégats).`);
        personnage.verifierSante();
        this.evoluer();
    }
    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son coup spécial puissance des arcanes (${this.attaque * 5} points de dégats).`);
        personnage.verifierSante();
        this.evoluer();
    }
}

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, 'Guerrier', 350, 50);
    }
    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son épée (${this.attaque} points de dégats).`);
        personnage.verifierSante();
        this.evoluer();
    }
    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son coup spécial haches de guerre (${this.attaque * 5} points de dégats).`);
        personnage.verifierSante();
        this.evoluer();
    }
}

var gandalf = new Magicien('Gandalf');
console.log(gandalf);

var thor = new Guerrier('Thor');
console.log(thor);

console.log(thor.informations);
console.log(gandalf.informations);
thor.attaquer(gandalf);
thor.attaquer(gandalf);
thor.attaquer(gandalf);
console.log(thor.informations);
gandalf.coupSpecial(thor);
console.log(gandalf.informations);