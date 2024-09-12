export const creatureStartPopulation = 5;
export const treeStartPopulation = 2;
export const maxDays = 7;
export let creaturePopulation = [];
export let treePopulation = [];

export const origin = {
  foodToCollect: 2,
};

export const setNewPopulation = (population) => {
  creaturePopulation = population;
};