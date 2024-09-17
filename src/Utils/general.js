import { creaturePopulation, treePopulation } from "../variables.js";
import { Creature, Tree } from "../Classes/index.js";
import { passGenes } from "./genes.js";

export function born(amountBorn, whatBorn, parentalValueHeight, parentalValueSpeed) {
  for (let i = 0; i < amountBorn; i++) {
    switch (whatBorn) {
      case "Creature":
        creaturePopulation.push(new Creature(passGenes(parentalValueSpeed)));
        break;
      case "Tree":
        treePopulation.push(new Tree());
        break;
    }
  }
}

export function randomInt(max, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

