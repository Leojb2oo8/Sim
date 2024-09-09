import {Creature} from "./Classes/index.js"
import {population} from "./Variables.js";

export function born(amountBorn, whatBorn) {
    for (let i = 0; i < amountBorn; i++) {
      population.push(new Creature());
    }
  }