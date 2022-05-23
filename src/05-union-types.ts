// We can use union types to combine multiple types into one type.
const addNumber = (n1: number | string, n2: number | string) => {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
};

console.log(`Add 2: ${addNumber(5, 2)}`);
console.log(`Add 2: ${addNumber("johan", "susanto")}`);

// --------
// Exercise
// --------

type User = {
  name: string;
  age: number;
  gender: "male" | "female";
};

function createUser(user: User) {
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

export {};
