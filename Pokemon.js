
/*class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.random() < this.luck / 100;
    }
  
    attackPokemon(target) {
      if (this.isLucky()) {
        const damage = this.attack - target.defense;
        if (damage > 0) {
          target.hp -= damage;
          console.log(this.name + ' attaque ' + target.name + ' et lui inflige ' + damage + ' dégâts.');
        } else {
          console.log(this.name + ' attaque ' + target.name + ', mais les dégâts sont nuls.');
        }
      } else {
        console.log(this.name + ' a manqué son attaque contre ' + target.name + '.');
      }
    }
  }
  
  const pikachu = new Pokemon('Pikachu', 40, 60, 100, 85);
  const charizard = new Pokemon('Charizard', 20, 30, 120, 60);
  
  while (pikachu.hp > 0 && charizard.hp > 0) {
    pikachu.attackPokemon(charizard);
  
    if (charizard.hp <= 0) {
      console.log(charizard.name + ' est K.O. ' + pikachu.name + ' est le vainqueur.');
      break;
    }
  
    charizard.attackPokemon(pikachu);

  
    if (pikachu.hp <= 0) {
      console.log(pikachu.name + ' est K.O. ' + charizard.name + ' est le vainqueur.');
      break;
    }
  }*/