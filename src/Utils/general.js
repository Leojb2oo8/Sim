import fs from "fs";
import { creaturePopulation, treePopulation } from "../variables.js";
import { Creature, Tree } from "../Classes/index.js";

export function born(amountBorn, whatBorn) {
  for (let i = 0; i < amountBorn; i++) {
    switch (whatBorn) {
      case "Creature":
        creaturePopulation.push(new Creature());
        break;
      case "Tree":
        treePopulation.push(new Tree());
        break;
    }
  }
}

export function randomInt(max, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function writeInFile(data) {
  let txt='';
  switch (typeof data) {
    case "string":
    case "number":
      txt= `${data}\n`;
      break;
    case "object":
      txt = Array.isArray(data)?
        data.map(item=>`${JSON.stringify(item)}\n`).join(''):
        `${JSON.stringify(item)}\n`;
      break;
  } 

  fs.appendFileSync("Log.txt", txt);
}

