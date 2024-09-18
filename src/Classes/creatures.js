import { randomInt, born} from "../Utils/general.js";
import { checkTreesForFood, getFood} from "../Utils/tree-util.js";

let currentNameNum = 0;
export class Creature {
  name = -1;
  speed = 0;
  alive = true;
  food = 0;
  livedDays = 0;
  constructor(
    initSpeed,
    initHeight,
    initCarryStrenth = randomInt(3),
    initLiveDays = randomInt(6, 3),
    initThief = [randomInt(2), randomInt(100)]
  ) {
    this.name = currentNameNum + 1;
    currentNameNum++;
    this.speed = initSpeed;
    this.height = initHeight;
    this.carryStrenth = initCarryStrenth;
    this.lifeTime = initLiveDays;
    this.thief = initThief
  }
  feed() {
    if (checkTreesForFood()) {
      this.food += getFood(this.carryStrenth, this.height);
    }
  }


  dieOrReproduce() {
    this.livedDays++;
    if (this.lifeTime > this.livedDays) {
      if (this.food >= 1) {
        this.food--;
        if (this.food > 0) {
          born(this.food, "Creature", this.speed, this.height);
          this.food = 0;
        }
      } else {
        this.alive = false;
      }
    } else {
      this.alive = false;
    }
  }
}
