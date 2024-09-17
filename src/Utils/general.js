import { creaturePopulation, treePopulation } from "../variables.js";
import { Creature, Tree } from "../Classes/index.js";
import { passGenes } from "./genes.js";

export function born(amountBorn, whatBorn, parentalValueSpeed, parentalValueHeight) {
  for (let i = 0; i < amountBorn; i++) {
    switch (whatBorn) {
      case "Creature":
        creaturePopulation.push(new Creature(passGenes(parentalValueSpeed,4,7), passGenes(parentalValueHeight,2,3)));
        break;
      case "Tree":
        treePopulation.push(new Tree(passGenes(parentalValueHeight,2,3)));
        break;
    }
  }
}

export function randomInt(max, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

