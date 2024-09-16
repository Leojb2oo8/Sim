export const creatureStartPopulation = 5;
export const treeStartPopulation = 3;
export const maxDays = 25;














export let creaturePopulation = [];
export let treePopulation = [];

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