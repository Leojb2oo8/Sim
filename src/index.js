import { feedPopulation, changePopulation } from "./Utils/creature-util.js";
import { born } from "./Utils/general.js";
import { regenTreeFood, reproduceTrees } from "./Utils/tree-util.js";
import {
  creatureStartPopulation,
  treeStartPopulation,
  maxDays,
  creaturePopulation,
  treePopulation,
} from "./variables.js";

born(creatureStartPopulation, "Creature");
born(treeStartPopulation, "Tree");

let itreations = 0;
console.log(creaturePopulation.sort((a, b) => a.n - b.n), treePopulation);
while (itreations <= maxDays && creaturePopulation.length != 0) {
  treePopulation.forEach(regenTreeFood)
  feedPopulation()
  changePopulation();
  treePopulation.forEach(reproduceTrees)
  itreations++;
  console.log(creaturePopulation.sort((a, b) => b.n - a.n), treePopulation, creaturePopulation.length,"\n///////////////////////////////////////////NEW DAY///////////////////////////////////////////");
}

console.log("Creature POP: "+creaturePopulation.length+"\nTree POP: "+treePopulation.length);
