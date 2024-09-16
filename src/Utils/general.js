import { creaturePopulation, treePopulation } from "../variables.js";
import { Creature, Tree } from "../Classes/index.js";

export function born(amountBorn, whatBorn, parentValue) {
  for (let i = 0; i < amountBorn; i++) {
    switch (whatBorn) {
      case "Creature":
        console.log(parentValue)
        creaturePopulation.push(new Creature(passGenes(parentValue)));
        break;
      case "Tree":
        treePopulation.push(new Tree());
        break;
    }
  }
}

function passGenes(parentValue){
  if (randomInt(2) == 1){
    console.log( parentValue+randomInt(randomInt(9,4),0))
  }
  else{
    console.log( parentValue-randomInt(randomInt(9,4),0))
  }
}




export function randomInt(max, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

