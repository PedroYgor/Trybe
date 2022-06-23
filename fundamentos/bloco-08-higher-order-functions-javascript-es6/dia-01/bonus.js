const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// 1
const battleMembers = { mage, warrior, dragon };

const damageDragon = (obj) => {
  const maxDamage = obj.dragon.strength;
  const minDamage = 15;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return damage;
};

// Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const damageWarrior = (obj) => {
  const maxDamage = obj.warrior.weaponDmg * obj.warrior.strength;
  const minDamage = obj.warrior.strength;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return damage;
};

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const damageMage = (obj) => {
  const maxDamage = obj.mage.intelligence * 2;
  const minDamage = obj.mage.intelligence;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  if (obj.mage.mana >= 15) {
    obj.mage.mana -= 15;
    return { damage: damage, manaGasta: 15 };
  }
  return 'Não possui mana suficiente';
};
// console.log(damageMage(battleMembers));
// console.log(damageDragon(battleMembers));
// console.log(damageWarrior(battleMembers));

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
const gameActions = {
  warriorAtkDrangon: (obj, damageWarrior) => {
    const damage  = damageWarrior(obj);
    obj.dragon.healthPoints -= damage;
    obj.warrior.damage = damage;
  },
  mageAtkDragon: (obj, damageMage) => {
    const infoMage = damageMage(obj);
    mage.damage = infoMage.damage;
    mage.mana -= infoMage.manaGasta;
    obj.dragon.healthPoints -= infoMage.damage;
  },
  dragonAtk: (obj, damageDragon) => {
    const damage = damageDragon(obj);
    obj.dragon.damage = damage;
    obj.mage.healthPoints -= damage;
    obj.warrior.healthPoints -= damage;
  }, 
  infoBattle: () => {
    // const mage = obj.mage;
    // const dragon = obj.dragon;
    // const warrior = obj.warrior;
    // const infoMage = `Mage: Health: ${mage.healthPoints}, damage: ${mage.damage}`;
    // const infoWarrior = `Warrior: Health: ${warrior.healthPoints}, damage: ${warrior.damage}`;
    // const infoDragon = `Dragon: Health: ${dragon.healthPoints}, damage: ${dragon.damage}`;
    // return console.log(`${infoMage}\n${infoWarrior}\n${infoDragon}`);
    return battleMembers;
  }
};

gameActions.warriorAtkDrangon(battleMembers, damageWarrior);
gameActions.mageAtkDragon(battleMembers, damageMage);
gameActions.dragonAtk(battleMembers, damageDragon);
console.log(gameActions.infoBattle());
