import {Creature, Tree} from "./Classes/index.js"
import {creaturePopulation, treePopulation} from "./Variables.js";

export function born(amountBorn, whatBorn) {
    for (let i = 0; i < amountBorn; i++) {
      switch (whatBorn){
        case "Creature":
          creaturePopulation.push(new Creature());
          break
        case "Tree":
          treePopulation.push(new Tree());
          break
      }
    }
  }

export function randomInt(max, min=1) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function checkAlive(alive) {
  return alive.alive == false;
}