"use strict";
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
};
// We can set a function as a type like this
let CombineValuesFn;
CombineValuesFn = addTwoNumber;
// But that's not the best way to do it, we can do this for more specific functions
let newCombineValuesFn;
newCombineValuesFn = addTwoNumber;
