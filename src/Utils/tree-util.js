import { setNewPopulation, treePopulation } from "../variables.js";
import { randomInt } from "./general.js";

export function regenTreeFood(elem) {
  elem.regenFood();
}
export function reproduceTrees(elem){
  elem.reproduce()
}

export function checkTreesForFood() {
  return treePopulation.some((item) => item.foodAvailable);
}

export function getFood(amountTaken, height) {
  const treeChosen = randomInt(treePopulation.length - 1, 0)
  if (height >= treePopulation[treeChosen].height){
    
    if (amountTaken >= treePopulation[treeChosen].foodAvailable){
      const foodToSend = treePopulation[treeChosen].foodAvailable
      treePopulation[treeChosen].foodAvailable = 0;
      return foodToSend;
    }
    else if (amountTaken < treePopulation[treeChosen].foodAvailable){
      treePopulation[treeChosen].foodAvailable -= amountTaken;
      return amountTaken;
    }
  } else {
    return 0
  }




}

export function deleteDeadTrees(){
  const newPopulation = treePopulation.filter((item) => item.alive);
    setNewPopulation(newPopulation, "Tree");
}