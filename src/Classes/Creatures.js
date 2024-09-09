import {origin} from "../Variables.js"
import {born} from "../utils.js"

export class Creature {
    food = 0;
    constructor(speed = Math.floor(Math.random() * 100) + 1) {
      this.speed = speed;
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
          born(this.food)
          this.food = 0
        }
      }
      else{
        this.speed = -1
      }
    }
  }
