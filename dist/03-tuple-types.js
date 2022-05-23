"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
// But we still can change author to number because the type is either number or string
person.role[1] = 10;
// And we still can add a new property
person.role[2] = "admin";
// The better way is to use a tuple type
const newPerson = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
// This won't work
// newPerson.role[1] = 5
// Either we use a tuple type or we use an array type we still can push a new value
newPerson.role.push("admin");
function findDistanceBetween(firstPoint, secondPoint) {
    const xDiff = firstPoint[0] - secondPoint[0];
    const yDiff = firstPoint[1] - secondPoint[1];
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
const firstPoint = [5, 5];
const secondPoint = [10, 10];
const result = findDistanceBetween(firstPoint, secondPoint);
console.log(result);
