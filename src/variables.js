export const creatureStartPopulation = 5;
export const treeStartPopulation = 3;
export const maxDays = 100;
export const logName = "Log.txt";
export const graphLogName = "GraphLog.txt";
export const maxGraphX = 5;
export const maxGraphY = 10;


export let creaturePopulation = [];
export let treePopulation = [];
export let predatorPopulation = [];
export let graph = makeGraph(maxGraphY, maxGraphX)

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