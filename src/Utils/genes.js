import { randomInt } from "./general.js"



export function passGenes(parentValue, min, max){
    if (randomInt(2) == 1){
      return parentValue+randomInt(randomInt(max, min),0)
    }
    else{
      let result = parentValue-randomInt(randomInt(max, min),0)
      if (result < 0){
        return 0
         
      }else {return result}
    }
  }