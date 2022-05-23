// If we want to use a function as a type in callback, the return type is not important. The important thing is the parameters
const addTwoNumberWithCb = (
  n1: number,
  n2: number,
  cb: (num: number) => void
) => {
  cb(n1 + n2);
};

console.log(addTwoNumberWithCb(5, 2, (result) => console.log(result)));
