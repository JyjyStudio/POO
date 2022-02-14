"use strict";
////////////////   Objet litteral ( à l'ancienne)

let utilisateur = {
    prenom : "Jyhad",
    nom : "Ben",
    age : 31,
    sePresenter() {
        console.log(`Bonjour je m'appelle ${utilisateur.prenom} ${utilisateur.nom} et j'ai ${utilisateur.age} ans.`)
    }
}
utilisateur.sePresenter();



////////////////   Création d'un constructeur Utilisateur

function Utilisateur(prenom, nom, age) {
    this.prenom = prenom,
    this.nom = nom,
    this.age = age,
    this.sePresenter = () => {
        console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`)
    } 
}


////////////////   Création des objets jyhad et foo à partir du constructeur Utilisateur

var jyhad = new Utilisateur("Jyhad", "Ben", 31);
var foo = new Utilisateur("Foo", "Bar", 22);

jyhad.sePresenter(); //Bonjour je m'appelle Jyhad Ben et j'ai 31 ans.
foo.sePresenter();   //Bonjour je m'appelle Foo Bar et j'ai 22 ans.

foo.poste = "Etudiant"; // on ajoute un poste a foo sans modifier jyhad

console.log(jyhad);    //Utilisateur {prenom: 'Jyhad', nom: 'Ben', age: 31, sePresenter: ƒ}
console.log(foo);      //Utilisateur {prenom: 'Foo', nom: 'Bar', age: 22, sePresenter: ƒ, poste: 'Etudiant'}

function Logement (type, annee, placeDeParking, proprietaire) {
    this.type = type,
    this.annee = annee, 
    this.placeDeParking = placeDeParking,
    this.proprietaire = proprietaire
}
var appartementA = new Logement("studio", 2018, true, jyhad); 
console.log(appartementA);  //Logement {type: 'studio', annee: 2018, placeDeParking: true, proprietaire: Utilisateur {prenom: 'Jyhad', nom: 'Ben', age: 31, sePresenter: ƒ}}
console.log(appartementA.proprietaire.prenom) // Jyhad
appartementA.proprietaire.sePresenter() // Bonjour je m'appelle Jyhad Ben et j'ai 31 ans.
