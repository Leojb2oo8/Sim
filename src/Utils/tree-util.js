import { treePopulation } from "../variables.js";
import { randomInt } from "./general.js";

export function regenTreeFood(elem) {
  elem.regenFood();
}

export function checkTreesForFood() {
  return treePopulation.some((item) => item.foodAvailable);
}

export function getFood(amountTaken) {
  treeChosen = randomInt(treePopulation.length, 0)
  if (amountTaken >= treePopulation[treeChosen].foodAvailable)
  treePopulation[treeChosen].foodAvailable=0
  return 1;
}
