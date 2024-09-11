import { treePopulation } from "../variables.js";

export function regenTreeFood(elem) {
  elem.regenFood();
}

export function checkTreesForFood() {
  return treePopulation.some((item) => item.foodAvailable);
}

export function getFood() {
  return 1;
}
