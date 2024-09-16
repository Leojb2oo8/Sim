import {creaturePopulation, setNewPopulation} from "../variables.js";
  
export function changeCreature(elem) {
    elem.dieOrReproduce();
    
  }
  
export function feedPopulation() {
    creaturePopulation.sort((a, b) => b.speed - a.speed).forEach((elem) => elem.feed());
  }
  
export function changePopulation() {
    creaturePopulation.forEach(changeCreature);
    const newPopulation = creaturePopulation.filter((item) => item.alive);
    setNewPopulation(newPopulation, "Creature");
  }