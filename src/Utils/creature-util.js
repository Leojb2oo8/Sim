import {creaturePopulation, setNewPopulation} from "../variables.js";
  
export function feedAndChangePopulation() {
    creaturePopulation.sort((a, b) => b.speed - a.speed).forEach((elem) => elem.feed());

    creaturePopulation.forEach((elem) => elem.steal());

    creaturePopulation.forEach((elem) => elem.dieOrReproduce());
    const newPopulation = creaturePopulation.filter((item) => item.alive);
    setNewPopulation(newPopulation, "Creature");
  }

export function checkCreaturesForFood() {
  return creaturePopulation.some((item) => item.food);
}