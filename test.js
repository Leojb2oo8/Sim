let var1 = 4;
const var2 = 79;
// function myFunction(p1,p2){
//     return p1 + p2;

// }
const myFunction = (p1,p2) => p1 + p2;
console.log(myFunction(3,9))

console.log(var1);

var1 = 68;
console.log(var1);

if (var1 == 68 && var2 == 79){
    console.log("good");
} else if (var1 < 67 || var2 == 80){
    console.log("no good")
} else{
    console.log("garbage")
}

function House(window,door,bathroom,chair) {
    this.windows = window,
    this.doors = door,
    this.bathrooms = bathroom,
    this.chairs = chair
}

const myHouse = new House(7, 5, 3, 7)
const neighbourHouse = new House(3, 2, 1, 4)

let x = myHouse.windows;
console.log(myHouse.doors)
delete myHouse.chairs;

myHouse.sofas = 4;
console.log(myHouse)
console.log(neighbourHouse)

let text = "";
for (let x in myHouse) {
  text += myHouse[x] + " ";
};
console.log(text)


let text2 = "";
for (let i = 0; i < 5; i++) {
    text2 += "helo" + "\n";
  }
console.log(text2)



const testAnimal = "Catt"

switch (testAnimal) {
    case "Cat":
        console.log("///Cat///")
        break
    case "Dog":
        console.log("///Dog///")
        break
    case "Fox":
        console.log("///Fox///")
        break
    default:
        console.log("///No Animal///")
        break
        

}
