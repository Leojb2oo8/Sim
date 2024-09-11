import {born, checkAlive} from "./utils.js"
import {creatureStartPopulation, treeStartPopulation, maxDays, origin, creaturePopulation, treePopulation} from "./Variables.js"

function orderPopulation(a, b) {
  return b.speed - a.speed;
}

function feedCreature(elem) {
  elem.feed();
}

function regenTreeFood(elem) {
  elem.regenFood()
}

function changeCreature(elem) {
  elem.dieOrReproduce();
}



function feedPopulation() {
  // while (origin.foodToCollect>0) {
    creaturePopulation.sort(orderPopulation).forEach(feedCreature); 
  // }
}

function changePopulation() {
  creaturePopulation.forEach(changeCreature); 
  // creaturePopulation.splice(creaturePopulation.forEach(checkAlive),1)
  
}

born(creatureStartPopulation, "Creature")
born(treeStartPopulation, "Tree")

let itreations = 0;
while (itreations <= maxDays || creaturePopulation.length == 0) {
  treePopulation.forEach(regenTreeFood);
  origin.foodToCollect = 2
  console.log(creaturePopulation,treePopulation)
  feedPopulation()
  console.log(creaturePopulation,treePopulation)
  changePopulation()
  console.log(creaturePopulation,treePopulation)
  itreations ++ 
}

console.log(creaturePopulation,treePopulation)



