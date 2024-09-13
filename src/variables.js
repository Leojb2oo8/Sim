export const creatureStartPopulation = 2;
export const treeStartPopulation = 2;
export const maxDays = 20;














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