import { randomInt } from "../utils.js";

export class Tree{
    constructor(height = randomInt(10), food = randomInt(15), liveDays = randomInt(9, 4)){
        this.foodAvailable = food
        this.height = height
        this.lifeTime = liveDays
    }
}