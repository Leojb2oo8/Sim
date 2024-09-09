import { Creature } from "./Classes/index.js";
import {born} from "./utils.js"
import {startPopulation, maxDays, origin, population} from "./Variables.js"



function orderPopulation(a, b) {
  b.speed - a.speed;
}

function feedCreature(elem) {
  elem.feed();
}

function changeCreature(elem) {
  elem.dieOrReproduce();
}



function feedPopulation() {
  while (origin.foodToCollect>0) {
    population.sort(orderPopulation).forEach(feedCreature); 
  }
}

function changePopulation() {
  population.forEach(changeCreature); 
  
}

born(startPopulation, Creature)

let itreations = 0;
while (itreations <= maxDays || population.length == 0) {
  origin.foodToCollect = 7
  feedPopulation()
  changePopulation()
  itreations ++ 
}

console.log(population)




