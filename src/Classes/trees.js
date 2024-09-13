import { randomInt, born } from "../Utils/general.js";

export class Tree {
  livedDays = 0;
  alive = true;
  constructor(
    height = randomInt(10),
    food = randomInt(15, 2),
    initLiveDays = randomInt(9, 4)
  ) {
    this.foodAvailable = food;
    this.height = height;
    this.lifeTime = initLiveDays;
    this.originalFood = food;
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
      born(1,"Tree")
      }
    }
}
