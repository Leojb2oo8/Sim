import { randomInt, born } from "../Utils/general.js";

export class Tree {
  livedDays = 0;
  alive = true;
  constructor(
    initHeight = randomInt(10),
    initFood = randomInt(15, 2),
    initLiveDays = randomInt(9, 4)
  ) {
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
    if (this.foodAvailable >= 2) {
      if (randomInt(2) == 1){
        born(1,"Tree")
      }
      }
    }
}
