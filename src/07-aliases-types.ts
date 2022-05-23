// Actually i've been using type alises until now
// Basically, a type alias is a way to define a new name for an existing type
type Combinable = number | string;
type ConversionDescriptor = "as-text" | "as-number";

const combineTwoNumber = (
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
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

combineTwoNumber(10, 20, "as-text");

export {};
