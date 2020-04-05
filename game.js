function rand_damage(low, high) {
  return Math.floor(low + Math.random() * (high - low));
}

var random_damage = rand_damage(20, 30); //damage range 20-30

var player = {
  hp: 100,
  shield: 20,
  totalhp: function () {
    return player.hp + player.shield;
  },
  damage: function () {
    return rand_damage(25, 30);
  },
  showDamage: function () {
    let div = document.getElementById("damage");
    div.innerHTML = this.damage();
  },
};

var NPC_skeleton = {
  hp: 70,
  shield: 0,
  totalhp: function () {
    return NPC_skeleton.hp + NPC_skeleton.shield;
  },
  damage: function () {
    return rand_damage(18, 21);
  },
  showDamage: function () {
    let div = document.getElementById("enemydamage");
    div.innerHTML = this.damage();
  },
};

var NPC_zombie = {
  hp: 85,
  shield: 0,
  totalhp: function () {
    return NPC_zombie.hp + NPC_zombie.shield;
  },
  damage: function () {
    return rand_damage(20, 23);
  },
  showDamage: function () {
    let div = document.getElementById("enemydamage");
    div.innerHTML = this.damage();
  },
};

var NPC_ghost = {
  hp: 1,
  shield: 0,
  totalhp: function () {
    return NPC_ghost.hp + NPC_ghost.shield;
  },
  damage: function () {
    return Math.random() > 0.5 ? 140 : 0;
  },
  showDamage: function () {
    let div = document.getElementById("enemydamage");
    div.innerHTML = this.damage();
  },
};

var heal_apple = {
  hpheal: 20, // consume to get health?
};
