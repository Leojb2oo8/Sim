import { deleteDeadTrees, regenTreeFood, reproduceTrees } from "./Utils/tree-util.js";
import { feedAndChangePopulation} from "./Utils/creature-util.js";
import { plotGraph, expandGraph } from "./Logers/graphs.js";
import { writeInFile } from "./Logers/logs.js";
import { beforeStart } from "./beforeSim.js";
import {
  maxDays,
  creaturePopulation,
  treePopulation,
  predatorPopulation,
  maxGraphY,
  maxGraphX,
  graphLogName,
  graph,
} from "./variables.js";


let itreations = 0;
let dayCompareList = [];
let newDay = ["Day", "CreaturePop", "TreePop"]
dayCompareList.push(newDay)

beforeStart()



plotGraph(graph, [5], [4], "🟩", maxGraphY)

expandGraph(graph, 2, maxGraphX)

writeInFile(graph, graphLogName);




function runSim(){
  while (itreations <= maxDays && creaturePopulation.length != 0) {
    treePopulation.forEach(regenTreeFood)
    feedAndChangePopulation();
    treePopulation.forEach(reproduceTrees)
    deleteDeadTrees()
    itreations++;

    newDay = [itreations, creaturePopulation.length, treePopulation.length]
    dayCompareList.push(newDay)
  }
}

runSim()
// while (itreations<100){
//   itreations=0
//   creaturePopulation.length = 0
//   treePopulation.length = 0
//   predatorPopulation.length = 0
//   born(creatureStartPopulation, "Creature", randomInt(100), randomInt(10));
//   born(treeStartPopulation, "Tree",0 ,randomInt(10));
//   born(5, "Predator",randomInt(100) ,randomInt(10));

//   runSim()
//   console.log(itreations)
// }

writeInFile (dayCompareList)
writeInFile ("\nCreature POP: "+creaturePopulation.length+"\nTree POP: "+treePopulation.length+"\nDays passed: "+itreations)

