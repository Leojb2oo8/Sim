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
  startGraphX,
  middleMan,
} from "./variables.js";


let itreations = 0;
let difference = 0;
let dayCompareList = [];
let newDay = ["Day", "CreaturePop", "TreePop"]
dayCompareList.push(newDay)

beforeStart()






function runSim(){
  while (itreations <= maxDays) {
    treePopulation.forEach(regenTreeFood)
    feedAndChangePopulation();
    treePopulation.forEach(reproduceTrees)
    deleteDeadTrees()
    itreations++;
    console.log(populationGraph.length)
    if (treePopulation.length > creaturePopulation.length){
      if (populationGraph.length <= treePopulation.length){
        difference = treePopulation.length - populationGraph.length
        middleMan(expandGraph(populationGraph, difference+1, startGraphX))
      }
    }
    else {
      if (populationGraph.length <= creaturePopulation.length){
        difference = creaturePopulation.length - populationGraph.length
        middleMan(expandGraph(populationGraph, difference+1, startGraphX))
      }
    }
    difference = 0
    console.log(populationGraph.length,"----",creaturePopulation.length,"----",treePopulation.length)

    plotGraph(populationGraph, creaturePopulation.length, itreations, "🟪", populationGraph.length)
    plotGraph(populationGraph, treePopulation.length, itreations, "🟩", populationGraph.length)
    
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
  
  