// You can use literal types to create a type that is a fixed value.
const addNumber = (
  n1: number | string,
  n2: number | string,
  resultConversion: "as-text" | "as-number"
) => {
  let result;
  // Here i'm using the type guard to check if the input is a number
  // And we can clarify that the resultConversion is only "as-number"
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  console.log(result);
};

addNumber(10, 20, "as-text");

export {};
