import { randomInt, born } from "../Utils/general.js";

let currentNameNum = 0;
export class Tree {
  name = -1;
  livedDays = 0;
  alive = true;
  constructor(
    initHeight,
    initFood = randomInt(15, 3),
    initLiveDays = randomInt(9, 4)
  ) {
    this.name = currentNameNum + 1;
    currentNameNum++;
    this.foodAvailable = initFood;
    this.height = initHeight;
    this.lifeTime = initLiveDays;
    this.originalFood = initFood;
  }
  regenFood() {
    this.livedDays++;
    if (this.lifeTime > this.livedDays) {
      this.foodAvailable = this.originalFood;
    } else {
      this.alive = false;
    }
  }

  reproduce() {
    if (this.foodAvailable >= 3) {
      if (randomInt(2) == 1){
        born(1, "Tree", 0, this.height)
      }
      }
    }
}
