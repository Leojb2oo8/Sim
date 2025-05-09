import { geneMutationChance } from "../variables.js"
import { randomInt } from "./general.js"

export let totalMutations = 0; 

export function passGenes(parentValue){
    if (randomInt(Math.round(1/geneMutationChance)) == 1){
      totalMutations++
      if (randomInt(2) == 1){
        return parentValue+(randomInt(10, 5)/100)*parentValue
      }
      else{
        let result = parentValue-(randomInt(10, 5)/100)*parentValue
        if (result < 0){
          return 0
           
        }else {return result}
      }
    }else {return parentValue}
  }