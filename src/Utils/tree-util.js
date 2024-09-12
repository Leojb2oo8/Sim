import { treePopulation } from "../variables.js";
import { randomInt } from "./general.js";

export function regenTreeFood(elem) {
  elem.regenFood();
}

export function checkTreesForFood() {
  return treePopulation.some((item) => item.foodAvailable);
}

export function getFood(amountTaken) {
  const treeChosen = randomInt(treePopulation.length - 1, 0)
  if (amountTaken >= treePopulation[treeChosen].foodAvailable){
    const foodToSend = treePopulation[treeChosen].foodAvailable
    treePopulation[treeChosen].foodAvailable = 0;
    return foodToSend;
  }
  else if (amountTaken < treePopulation[treeChosen].foodAvailable){
    treePopulation[treeChosen].foodAvailable -= amountTaken;
    return amountTaken;
  }
}
