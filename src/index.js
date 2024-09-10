import {born} from "./utils.js"
import {creatureStartPopulation, treeStartPopulation, maxDays, origin, creaturePopulation, treePopulation} from "./Variables.js"

function orderPopulation(a, b) {
  return b.speed - a.speed;
}

function feedCreature(elem) {
  elem.feed();
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
  
}

born(creatureStartPopulation, "Creature")
born(treeStartPopulation, "Tree")

let itreations = 0;
while (itreations <= maxDays || creaturePopulation.length == 0) {
  origin.foodToCollect = 12
  console.log(creaturePopulation)
  feedPopulation()
  console.log(creaturePopulation)
  changePopulation()
  console.log(creaturePopulation)
  itreations ++ 
}

console.log(creaturePopulation)
console.log(treePopulation)



