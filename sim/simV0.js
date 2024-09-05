const startPopulation = 5;
const maxDays = 5;
let foodToCollect = 7;
let population = [];
let itreations = 0;
let currentCreaturNum = 0

class Creature {
  food = 0;
  constructor(speed = Math.floor(Math.random() * 100) + 1) {
    this.speed = speed;
  }
  feed() {
    if (foodToCollect > 0) {
      this.food ++;
      foodToCollect --
    }
  }
  dieOrReproduce() {
    if (this.food >= 1){
      this.food --
      if (this.food > 0){
        born(this.food)
        this.food = 0
      }
    }
    else{
      this.speed = -1
    }
  }
}

function orderPopulation(a, b) {
  b.speed - a.speed;
}

function feedCreature(elem) {
  elem.feed();
}

function changeCreature(elem) {
  elem.dieOrReproduce();
}

function born(amountBorn) {
  for (let i = 0; i < amountBorn; i++) {
    population.push(new Creature());
  }
  
}

function feedPopulation() {
  while (foodToCollect>0) {
    population.sort(orderPopulation).forEach(feedCreature); 
  }
}

function changePopulation() {
  population.forEach(changeCreature); 
  
}

born(startPopulation)

while (itreations <= maxDays || population.length == 0) {
  console.log(population);
  foodToCollect = 7
  feedPopulation()
  console.log(population);
  changePopulation()
  console.log(population);
  itreations ++ 
}





