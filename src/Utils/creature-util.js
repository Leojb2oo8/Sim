import {creaturePopulation, setNewPopulation} from "../variables.js";
  
export function changeCreature(elem) {
    elem.dieOrReproduce();
    
  }
  
export function feedPopulation() {
    creaturePopulation.sort((a, b) => b.speed - a.speed).forEach((elem) => elem.feed());
  }
  
export function changePopulation() {
    creaturePopulation.forEach(changeCreature);
    // writeInFile("\n//////DEATHS///////\n")
    // writeInFile(creaturePopulation.sort((a, b) => a.speed - b.speed))
    // writeInFile("//////DEATHS///////\n")


    const newPopulation = creaturePopulation.filter((item) => item.alive);
    setNewPopulation(newPopulation, "Creature");
  }