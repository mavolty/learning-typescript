// Return types number even though we don't assign a value
const addTwoNumber = (n1: number, n2: number) => {
  return n1 + n2;
};

// Return types void because we don't return anything
const addTwoNumberVoid = (n1: number, n2: number): void => {
  console.log(n1 + n2);
};

// If we want to return undefined, we can do this
const addTwoNumberUndefined = (n1: number, n2: number): undefined => {
  n1 + n2;
  return;
};

export {};
