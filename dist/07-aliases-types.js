"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combineTwoNumber = (n1, n2, resultConversion) => {
    let result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    console.log(result);
};
combineTwoNumber(10, 20, "as-text");
