import { randomInt } from "./general.js"



export function passGenes(parentValue){
    if (randomInt(2) == 1){
      return parentValue+randomInt(randomInt(7,4),0)
    }
    else{
      return parentValue-randomInt(randomInt(7,4),0)
    }
  }