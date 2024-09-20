import { feedAndChangePopulation} from "./Utils/creature-util.js";
import { born, randomInt } from "./Utils/general.js";
import { openLogFile, writeInFile } from "./Utils/logs.js";
import { deleteDeadTrees, regenTreeFood, reproduceTrees } from "./Utils/tree-util.js";
import {
  creatureStartPopulation,
  treeStartPopulation,
  maxDays,
  creaturePopulation,
  treePopulation,
  predatorPopulation,
} from "./variables.js";


let itreations = 0;
let dayCompareList = [];
let newDay = ["Day", "CreaturePop", "TreePop"]
dayCompareList.push(newDay)

openLogFile();


born(creatureStartPopulation, "Creature", randomInt(100), randomInt(10));
born(treeStartPopulation, "Tree",0 ,randomInt(10));
born(5, "Predator",randomInt(100) ,randomInt(10));

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

while (itreations <= maxDays && creaturePopulation.length != 0) {
  treePopulation.forEach(regenTreeFood)
  feedAndChangePopulation();
  treePopulation.forEach(reproduceTrees)
  deleteDeadTrees()
  itreations++;

  newDay = [itreations, creaturePopulation.length, treePopulation.length]
  dayCompareList.push(newDay)
  writeInFile(treePopulation.sort((a, b) => a.height - b.height))
  writeInFile(creaturePopulation.sort((a, b) => a.height - b.height))
  writeInFile("\n///////////////////////////////////////////NEW DAY///////////////////////////////////////////\n")
  
}

writeInFile (dayCompareList)
writeInFile ("\nCreature POP: "+creaturePopulation.length+"\nTree POP: "+treePopulation.length+"\nDays passed: "+itreations)