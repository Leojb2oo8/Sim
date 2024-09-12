import { randomInt, born} from "../Utils/general.js";
import { checkTreesForFood, getFood} from "../Utils/tree-util.js";

let currentNameNum = 0;
export class Creature {
  name = -1;
  speed = 0;
  alive = true;
  food = 0;
  constructor(
    speed = randomInt(100),
    height = randomInt(10),
    carryStrenth = randomInt(3)
  ) {
    this.name = currentNameNum + 1;
    currentNameNum++;
    this.speed = speed;
    // this.height = height;
    // this.carryStrenth = carryStrenth;
  }
  feed() {
    if (checkTreesForFood()) {
      this.food += getFood();
    }
  }
  dieOrReproduce() {
    if (this.food >= 1) {
      this.food--;
      if (this.food > 0) {
        born(this.food, "Creature");
        this.food = 0;
      }
    } else {
      this.alive = false;
    }
  }
}