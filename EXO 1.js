
const musiques = ["Beggin", "Natural", "Believer", "Lonely", "Anissa de Wejdene"];

class Personnage {
  constructor(prenom, santeMentale) {
    this.prenom = prenom;
    this.santeMentale = santeMentale;
  }
}

class Trajet {
  constructor(radio, feuxRouges, changements) {
    this.radio = radio;
    this.feuxRouges = feuxRouges;
    this.changements = changements;
  }
}

function choisirMusique() {
  let musique;
  do {
   return musiques[Math.floor(Math.random() * musiques.length)];
  } while (musique === "Anissa de Wejdene");
  return musique;
}

function simulerTrajet(personnage, trajet) {
  for (let i = 1; i <= trajet.feuxRouges; i++) {
    const musique = choisirMusique();
    console.log("Feu rouge " + i + ": Musique jouée - " + musique + ", Feux restants - " + (trajet.feuxRouges - i));

    if (musique === "Anissa de Wejdene") {
      personnage.santeMentale--;
      trajet.changements++;

      if (personnage.santeMentale <= 0) {
        console.log("Explosion !");
        return;
      }
    }
  }

  console.log("Arrivé à destination en " + trajet.changements + " changements de taxi !");
}

const john = new Personnage("John", 10);
const trajetEnTaxi = new Trajet("Radio du taxi", 30, 0);

simulerTrajet(john, trajetEnTaxi);
