import { feedPopulation, changePopulation } from "./Utils/creature-util.js";
import { born } from "./Utils/general.js";
import { regenTreeFood } from "./Utils/tree-util.js";
import {
  creatureStartPopulation,
  treeStartPopulation,
  maxDays,
  origin,
  creaturePopulation,
  treePopulation,
} from "./variables.js";

born(creatureStartPopulation, "Creature");
born(treeStartPopulation, "Tree");

let itreations = 0;
while (itreations <= maxDays && creaturePopulation.length != 0) {
  treePopulation.forEach(regenTreeFood);
  // console.log(creaturePopulation, treePopulation);
  feedPopulation();
  // console.log(creaturePopulation, treePopulation);
  changePopulation();
  // console.log(creaturePopulation, treePopulation);
  itreations++;
}

console.log(creaturePopulation, treePopulation);
