function creerLivre(titre, auteurs, prix, genre, nombreDePages, description) {
  return {
    titre:titre,
    auteurs:auteurs,
    prix: prix,
    genre: genre,
    nombreDePages: nombreDePages,
    description: description}
}
console.log(creerLivre("Harry Potter","J.K. Rowling",60,"fantasy",320, "L'histoire d'un jeune sorcier qui decouvre le monde magique."))



function afficherLivre(livre) {
  return livre.titre+", par "+livre.auteurs+"--" +livre.genre +"," + livre.prix +"DT"
}
let livre1=creerLivre("Harry Potter","J.K. Rowling",60,"fantasy",320, "L'histoire d'un jeune sorcier qui decouvre le monde magique.")
console.log(afficherLivre(livre1))


let livre2 = creerLivre("Romeo et Juliette",["William Shakespeare"],15.50,"tragedie",200,"L'histoire d'amour tragique de deux jeunes amoureux.")
let livres = [livre1,livre2]
function afficherTousLesLivres(livres) {
  let affichage = ""
  for (let i=0;i<livres.length;i++) {
    affichage+=(i+1) + "." +afficherLivre(livres[i])+"\n"
  }
  return affichage
}
console.log(afficherTousLesLivres(livres))



/*function rechercheLivre(recherche, livres) {
 return (livres.titre.includes(recherche)) &&(livres.genre.includes(recherche))&&(livres.description.includes(recherche))&&(livres.auteurs.includes(recherche)) 
  
   
}
console.log(rechercheLivre(livre1,livres))*/


function supprimerLivre(titre,livres) {
  let v=[]
  for (let i=0;i<livres.length;i++){
    if (livres[i].titre!==titre) {
      v.push(livres[i])
    }
  }

  return v
}

console.log(supprimerLivre(livre1,livres))


function creerFilm(titre, realisateur, duree, dateSortie, acteurs, studios, resume, note) {
  return {
  titre:titre,
  realisateur: realisateur,
  duree:duree,
  dateSortie:dateSortie,
    acteurs:acteurs,
    studios: studios,
    resume: resume,
    note:note
  }
}

let film1 = creerFilm(
  "Inception",
  "Christopher Nolan",
  148,
  2010,
    [{ acteur: "Leonardo DiCaprio", role: "Cobb" }, { acteur: "Joseph Gordon-Levitt", role: "Arthur" }],
  "Warner Bros.",
  "Un voleur entre dans les rêves des autres.",
  8.8
)
let film2 = creerFilm(
  "Titanic",
  "James Cameron",
  195,
  1997,
  ["Leonardo DiCaprio","Kate Winslet"],
  "Paramount Pictures",
  "Une histoire d'amour a bord du Titanic.",
  7.9
)

let film3 = creerFilm(
  "Interstellar",
  "Christopher Nolan",
  169,
  2014,
  ["Matthew McConaughey","Anne Hathaway"],
  "Paramount Pictures",
  "Des astronautes voyagent dans l'espace pour sauver l'humanité.",
  8.7
)
let film4 = creerFilm(
  "The Dark Knight",
  "Christopher Nolan",
  152,
  2008,
  ["Christian Bale","Heath Ledger"],
  "Warner Bros.",
  "Batman affronte le Joker a Gotham City.",
  9.0
)
let film5 = creerFilm(
  "Avatar",
  "James Cameron",
  162,
  2009,
  [ "Sam Worthington","Zoe Saldana"],
  "20th Century Fox",
  "Un ancien soldat decouvre le monde de Pandora.",
  7.8
)
console.log(film1,film2,film3,film4,film5)


function afficherFilm(film) {
  return film.titre + "par"+film.realisateur +" duree" + film.duree +" minutes,"+film.note +"/10"
}
console.log(afficherFilm(film1))

function afficherCasting(film) {
  let ch=""
  for (let i=0;i<film.acteurs.length;i++) {
    ch+=film.acteurs[i].role+":"+film.acteurs[i].acteur +"\n"
  }
  return ch
}
console.log(afficherCasting(film1))



let films=[film1,film2,film3,film4,film5]
function afficherTousLesFilms(films) {
  let ch=""
  for (let i=0; i<films.length;i++) {
    ch+=(i+1) +"." +afficherFilm(films[i])+"\n"
  }
return ch
}
console.log(afficherTousLesFilms(films))


function moyenneDuree(films){
  let s=0
  for (let i=0; i<films.length;i++) {
    s+=films[i].duree
  }
  return s/films.length
}
console.log(moyenneDuree(films))


function moyennenote(films){
  let s=0
  for (let i=0; i<films.length;i++) {
    s+=films[i].note
  }
  return s/films.length
}
console.log(moyennenote(films))

/*function recherchefilm(recherche, films) {
 return (films.titre.includes(recherche)) &&(films.realisateur.includes(recherche))
 &&(films.dateSortie.includes(recherche))&&(films.acteurs.includes(recherche))&& (films.studios.includes(recherche))
 &&(films.resume.includes(recherche))&&(films.note.includes(recherche))
}
console.log(recherchefilm(film3,films))*/
