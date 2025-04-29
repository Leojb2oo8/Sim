import { deleteDeadTrees, regenTreeFood, reproduceTrees } from "./Utils/tree-util.js";
import { feedAndChangePopulation} from "./Utils/creature-util.js";
import { plotGraph, expandGraph, makeGraph} from "./Logers/graphs.js";
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
let startDay = ["Day", "CreaturePop", "TreePop"]
let newDay = []
let attemptsTried = 0;

dayCompareList.push(startDay)







function runSim(){
  beforeStart()
  dayCompareList = [startDay]
  middleMan(makeGraph(startGraphY, startGraphX))

  while (itreations <= maxDays && creaturePopulation.length != 0) {
    treePopulation.forEach(regenTreeFood)
    feedAndChangePopulation();
    treePopulation.forEach(reproduceTrees)
    deleteDeadTrees()
    itreations++;
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
    console.log(itreations,"----", creaturePopulation.length,"----", treePopulation.length)
    plotGraph(populationGraph, creaturePopulation.length, itreations, "🟪", populationGraph.length)
    plotGraph(populationGraph, treePopulation.length, itreations, "🟩", populationGraph.length)
    
    newDay = [itreations, creaturePopulation.length, treePopulation.length]
    dayCompareList.push(newDay)
  }
}

runSim()
// while (itreations<100){
//     itreations=0
//     creaturePopulation.length = 0
//     treePopulation.length = 0
//     predatorPopulation.length = 0

  
//     runSim()
//     // console.log(itreations)
//     attemptsTried ++
//   }
  
writeInFile (dayCompareList)
writeInFile ("\nCreature POP: "+creaturePopulation.length+"\nTree POP: "+treePopulation.length+"\nDays passed: "+itreations+"\nAttempts Tried: "+attemptsTried)

writeInFile(populationGraph, graphLogName);
  
  