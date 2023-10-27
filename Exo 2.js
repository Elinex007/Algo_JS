/*class Character {
  constructor(name, probabilityDie, probabilityDamage, probabilityDieWithDamage) {
    this.name = name;
    this.probabilityDie = probabilityDie;
    this.probabilityDamage = probabilityDamage;
    this.probabilityDieWithDamage = probabilityDieWithDamage;
    this.hp = 100;
  }

  attack() {
    const random = Math.random();

    if (random < this.probabilityDie) {
      return "die";
    } else if (random < this.probabilityDie + this.probabilityDamage) {
      return "damage";
    } else if (random < this.probabilityDie + this.probabilityDamage + this.probabilityDieWithDamage) {
      return "damageWithDie";
    } else {
      return "survive";
    }
  }
}

const names = ["Docteur Intellecto", "Capitaine Sprint", "Madame Étournée"];
const survivors = [];

for (let i = 0; i < 5; i++) {
  const name = names[Math.floor(Math.random() * names.length)];
  const probabilityDie = Math.random();
  const probabilityDamage = Math.random();
  const probabilityDieWithDamage = Math.random();
  survivors.push(new Character(name, probabilityDie, probabilityDamage, probabilityDieWithDamage));
}

const jason = new Character("Jason", 0.3, 0.5, 0.2);

const deadSurvivors = [];

while (jason.hp > 0 && survivors.length > 0) {
  const randomSurvivorIndex = Math.floor(Math.random() * survivors.length);
  const randomSurvivor = survivors[randomSurvivorIndex];

  const result = randomSurvivor.attack();

  if (result === "die") {
    deadSurvivors.push(randomSurvivor.name);
    survivors.splice(randomSurvivorIndex, 1);
    console.log(randomSurvivor.name + " a été tué par Jason.");
  } else if (result === "damage") {
    jason.hp -= 10;
    console.log(randomSurvivor.name + " a infligé 10 points de dégâts à Jason.");
  } else if (result === "damageWithDie") {
    jason.hp -= 15;
    deadSurvivors.push(randomSurvivor.name);
    survivors.splice(randomSurvivorIndex, 1);
    console.log(randomSurvivor.name + " a infligé 15 points de dégâts à Jason, mais est mort en le faisant.");
    console.log(randomSurvivor.name + " a été tué par Jason.");
  } else {
    console.log(randomSurvivor.name + " a esquivé l'attaque de Jason et n'a pas été touché.");
  }
}

console.log("Morts : ", deadSurvivors);
console.log(jason.hp <= 0 ? "Jason a été tué !" : "Jason a survécu !");*/
