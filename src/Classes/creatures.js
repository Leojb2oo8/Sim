import { randomInt, born} from "../Utils/general.js";
import { checkTreesForFood, getFood} from "../Utils/tree-util.js";

let currentNameNum = 0;
export class Creature {
  name = -1;
  speed = 0;
  alive = true;
  food = 0;
  constructor(
    // initSpeed = randomInt(100),
    initSpeed = 50,
    initHeight = randomInt(10),
    initCarryStrenth = randomInt(3)
  ) {
    this.name = currentNameNum + 1;
    currentNameNum++;
    this.speed = initSpeed;
    this.height = initHeight;
    this.carryStrenth = initCarryStrenth;
  }
  feed() {
    if (checkTreesForFood()) {
      this.food += getFood(this.carryStrenth);
    }
  }
  dieOrReproduce() {
    if (this.food >= 1) {
      this.food--;
      if (this.food > 0) {
        console.log(this.speed)
        born(this.food, "Creature", this.speed);
        this.food = 0;
      }
    } else {
      this.alive = false;
    }
  }
}
