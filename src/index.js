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
  graphLogName,
  populationGraph,
  startGraphY,
} from "./variables.js";

let currentGraphY = startGraphY;
let itreations = 0;
let dayCompareList = [];
let newDay = ["Day", "CreaturePop", "TreePop"]
dayCompareList.push(newDay)

beforeStart()



// expandGraph(populationGraph, 2, startGraphX)





function runSim(){
  while (itreations <= maxDays) {
    treePopulation.forEach(regenTreeFood)
    feedAndChangePopulation();
    treePopulation.forEach(reproduceTrees)
    deleteDeadTrees()
    itreations++;


    if (treePopulation.length > creaturePopulation.length){
      console.log("tree")
      expandGraph(populationGraph, 2, startGraphX)
      // currentGraphY += treePopulation.length
    }
    else {
      console.log("creat")
      // currentGraphY += creaturePopulation.length
    }

    plotGraph(populationGraph, creaturePopulation.length, itreations, "🟪", currentGraphY)
    plotGraph(populationGraph, treePopulation.length, itreations, "🟩", currentGraphY)
    
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

writeInFile(populationGraph, graphLogName);
  
  