"use strict"

class Utilisateur {
    constructor(prenom, nom, age) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    // Un getter (accesseur) permet de récuperer une propriété
    get prochainAge() {
        return `l'année prochaine, vous aurez ${this.age +1} ans.`
    }
    get nomComplet() {
        return `${this.prenom} ${this.nom}`;
    }
    // un setter (mutateur) permet de définir une propriété 
    set nomComplet(valeur) {
        [this.prenom, this.nom] = valeur.split(' '); // split() divise une chaine de caracteres à partir d'un séparateur et en fait un tableau.
    }
    sePresenter() {
        console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans.`);
    }
}
var foo = new Utilisateur('foo', 'bar', 25); 
foo.sePresenter(); // => Bonjour je m'appelle foo bar, j'ai 25 ans.
console.log(foo.prochainAge); // => l'année prochaine, vous aurez 26 ans.
console.log(foo.nomComplet); // => foo bar
foo.nomComplet = "Diego Maradona";
console.log(foo.nomComplet); // => Jyhad Benyoussef // sans le setter on aurait TypeError: Cannot set property nomComplet of #<Utilisateur> which has only a getter