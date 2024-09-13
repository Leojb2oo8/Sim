import fs from 'fs';
import { feedPopulation, changePopulation } from "./Utils/creature-util.js";
import { born, writeInFile } from "./Utils/general.js";
import { deleteDeadTrees, regenTreeFood, reproduceTrees } from "./Utils/tree-util.js";
import {
  creatureStartPopulation,
  treeStartPopulation,
  maxDays,
  creaturePopulation,
  treePopulation,
} from "./variables.js";


fs.writeFile("Log.txt", "", (err)=>{
  if (err) throw err;
})



born(creatureStartPopulation, "Creature");
born(treeStartPopulation, "Tree");

let itreations = 0;

writeInFile("Starting Variables:")
writeInFile(creatureStartPopulation)
writeInFile(treeStartPopulation)
writeInFile(maxDays)

writeInFile("\nStarting Creature Population:\n")
writeInFile(creaturePopulation.sort((a, b) => a.n - b.n))
writeInFile("\nStarting Tree Population:\n")
writeInFile(treePopulation)

  

while (itreations <= maxDays && creaturePopulation.length != 0) {
  treePopulation.forEach(regenTreeFood)
  feedPopulation()
  changePopulation();
  treePopulation.forEach(reproduceTrees)
  deleteDeadTrees()
  itreations++;


  writeInFile(creaturePopulation.sort((a, b) => b.n - a.n))
  writeInFile(treePopulation)
  writeInFile("\n///////////////////////////////////////////NEW DAY///////////////////////////////////////////\n")
  
}

writeInFile ("\nCreature POP: "+creaturePopulation.length+"\nTree POP: "+treePopulation.length)
