import { makeGraph } from "./Logers/graphs.js";

export const creatureStartPopulation = 5;
export const treeStartPopulation = 3;
export const maxDays = 100;
export const geneMutationChance = 0.01;
export const logName = "Log.txt";
export const graphLogName = "GraphLog.txt";
export const startGraphX = maxDays+1;
export const startGraphY = 10;

export let creaturePopulation = [];
export let treePopulation = [];
export let predatorPopulation = [];
export let populationGraph = makeGraph(startGraphY, startGraphX)

export function middleMan(newValue){
  populationGraph = newValue
}

export const origin = {
  foodToCollect: 2,
};

export const setNewPopulation = (population, whatBorn) => {
  switch (whatBorn){
    case "Creature":
      creaturePopulation = population;
      break
    case "Tree":
      treePopulation = population;
      break
  }
};