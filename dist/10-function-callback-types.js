"use strict";
// If we want to use a function as a type in callback, the return type is not important. The important thing is the parameters
const addTwoNumberWithCb = (n1, n2, cb) => {
    cb(n1 + n2);
};
console.log(addTwoNumberWithCb(5, 2, (result) => console.log(result)));
