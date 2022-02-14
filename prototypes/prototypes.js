"use strict";
// Creer un objet avec Object()
var monObjet = new Object();
monObjet.titre = "Ceci est le titre de mon objet";
// console.log(monObjet);  // => {titre: 'Ceci est le titre de mon objet'}


// on met dans le constructeur seulement les informations spécifiques aux utilisateurs
function Utilisateur(prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
}

// et on met les méthodes générales à tous les utilisateurs dans le prototype
Utilisateur.prototype.sePresenter = function() {
   console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`);
} // => ajoute une propriété [[Prototype]] à nos objets, qui contiennent maintenant la méthode sePresenter 
    
var jyhad = new Utilisateur("Jyhad", "Ben", 31);
var foo = new Utilisateur("Foo", "Bar", 22);

jyhad.sePresenter() //Bonjour je m'appelle Jyhad Ben et j'ai 31 ans.
foo.sePresenter() //Bonjour je m'appelle Foo Bar et j'ai 22 ans.
console.log(jyhad); // On voit que javascript à ajouté une propriété [[Prototype]] à notre objet, qui contient la méthode sePresenter 