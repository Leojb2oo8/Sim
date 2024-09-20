import { randomInt, born} from "../Utils/general.js";

let currentNameNum = 0;

export class Predator {
  name = -1;
  speed = 0;
  alive = true;
  food = 0;
  livedDays = 0;
  constructor(
    initSpeed,
    initLiveDays = randomInt(6, 3),
  ) {
    this.name = currentNameNum + 1;
    currentNameNum++;
    this.speed = initSpeed;
    this.lifeTime = initLiveDays;
  }
  feed() {
    this.food++
  }

  dieOrReproduce() {
    this.livedDays++;
    if (this.lifeTime > this.livedDays) {
      if (this.food >= 1) {
        this.food--;
        if (this.food > 0) {
          born(1, "Predator", this.speed, this.height);
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
