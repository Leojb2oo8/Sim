import {Creature} from "./Classes"
import {population} from "./Variables.js";

export function born(amountBorn) {
    for (let i = 0; i < amountBorn; i++) {
      population.push(new Creature());
    }
  }