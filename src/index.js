import { feedPopulation, changePopulation } from "./Utils/creature-util.js";
import { born } from "./Utils/general.js";
import { openLogFile, writeInFile } from "./Utils/logs.js";
import { deleteDeadTrees, regenTreeFood, reproduceTrees } from "./Utils/tree-util.js";
import {
  creatureStartPopulation,
  treeStartPopulation,
  maxDays,
  creaturePopulation,
  treePopulation,
} from "./variables.js";

openLogFile();


born(creatureStartPopulation, "Creature");
born(treeStartPopulation, "Tree");

let itreations = 0;

writeInFile("Starting Variables:")
writeInFile(creatureStartPopulation)
writeInFile(treeStartPopulation)
writeInFile(maxDays)

writeInFile("\nStarting Creature Population:\n")
writeInFile(creaturePopulation.sort((a, b) => a.name - b.name))
writeInFile("\nStarting Tree Population:\n")
writeInFile(treePopulation)
writeInFile("\n//////////////////////////////////////START GAME//////////////////////////////////////\n")

  

while (itreations <= maxDays && creaturePopulation.length != 0) {
  treePopulation.forEach(regenTreeFood)
  feedPopulation()
  changePopulation();
  treePopulation.forEach(reproduceTrees)
  deleteDeadTrees()
  itreations++;


  writeInFile(creaturePopulation.sort((a, b) => b.name - a.name))
  writeInFile(treePopulation)
  writeInFile("\n///////////////////////////////////////////NEW DAY///////////////////////////////////////////\n")
  
}

writeInFile ("\nCreature POP: "+creaturePopulation.length+"\nTree POP: "+treePopulation.length)
