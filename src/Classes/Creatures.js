import {origin} from "../Variables.js"
import {born, randomInt} from "../utils.js"
let currentNameNum = 0
export class Creature {
    
    constructor(speed = randomInt(100), height = randomInt(10), carryStrenth = randomInt(3)) {
      this.name = currentNameNum+1
      currentNameNum++
      this.speed = speed;
      // this.height = height;
      // this.carryStrenth = carryStrenth;
      this.food = 0;
      this.alive = true;
    }
    feed() {
      if (origin.foodToCollect > 0) {
        this.food ++;
        origin.foodToCollect --
      }
    }
    dieOrReproduce() {
      if (this.food >= 1){
        this.food --
        if (this.food > 0){
          born(this.food, "Creature")
          this.food = 0
        }
      }
      else{
        this.alive = false
      }
    }
  }
