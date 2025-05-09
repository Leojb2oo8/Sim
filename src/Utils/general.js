import { creaturePopulation, treePopulation, predatorPopulation } from "../variables.js";
import { Creature, Tree, Predator} from "../Classes/index.js";
import { passGenes } from "./genes.js";

export function born(amountBorn, whatBorn, parentalValueSpeed, parentalValueHeight) {
  for (let i = 0; i < amountBorn; i++) {
    switch (whatBorn) {
      case "Creature":
        creaturePopulation.push(new Creature(passGenes(parentalValueSpeed,), passGenes(parentalValueHeight,)));
        break;
      case "Tree":
        treePopulation.push(new Tree(passGenes(parentalValueHeight)));
        break;
      case "Predator":
        predatorPopulation.push(new Predator(passGenes(parentalValueSpeed,4,7)));
        break;
    }
  }
}

export function randomInt(max, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomTFWeight(total, percent){
  return randomInt(total) <= percent
}