const addTwoNumber = (n1: number, n2: number) => {
  return n1 + n2;
};

// We can set a function as a type like this
let CombineValuesFn: Function;
CombineValuesFn = addTwoNumber;

// But that's not the best way to do it, we can do this for more specific functions
let newCombineValuesFn: (a: number, b: number) => number;
newCombineValuesFn = addTwoNumber;
