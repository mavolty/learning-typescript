"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Return types number even though we don't assign a value
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
};
// Return types void because we don't return anything
const addTwoNumberVoid = (n1, n2) => {
    console.log(n1 + n2);
};
// If we want to return undefined, we can do this
const addTwoNumberUndefined = (n1, n2) => {
    n1 + n2;
    return;
};
