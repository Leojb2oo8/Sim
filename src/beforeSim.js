import { born, randomInt } from "./Utils/general.js";
import { openLogFile, writeInFile } from "./Logers/logs.js";
import {
  creatureStartPopulation,
  treeStartPopulation,
  maxDays,
  creaturePopulation,
  treePopulation,
  predatorPopulation,
  logName,
  graphLogName,
} from "./variables.js";


export function beforeStart(){
    openLogFile(logName);
    openLogFile(graphLogName);

    born(creatureStartPopulation, "Creature", randomInt(100), randomInt(100));
    born(treeStartPopulation, "Tree",0 ,randomInt(100));
    born(5, "Predator",randomInt(100) ,randomInt(100));

    writeInFile("Starting Variables:")
    writeInFile(creatureStartPopulation)
    writeInFile(treeStartPopulation)
    writeInFile(maxDays)

    writeInFile("\nStarting Creature Population:\n")
    writeInFile(creaturePopulation.sort((a, b) => a.name - b.name))
    writeInFile("\nStarting Tree Population:\n")
    writeInFile(treePopulation)
    writeInFile("\nStarting Predator Population:\n")
    writeInFile(predatorPopulation)
    writeInFile("\n//////////////////////////////////////START GAME//////////////////////////////////////\n")

}