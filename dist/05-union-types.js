"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We can use union types to combine multiple types into one type.
const addNumber = (n1, n2) => {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
};
console.log(`Add 2: ${addNumber(5, 2)}`);
console.log(`Add 2: ${addNumber("johan", "susanto")}`);
function createUser(user) {
    if (user.gender === "male") {
        console.log("User is male");
    }
    console.log("User is female");
}
createUser({
    name: "Johan",
    age: 15,
    gender: "male",
});
