// To make object types, you could do this
const person1: {
  name: string;
  age: number;
} = {
  name: "Jason",
  age: 30,
};

// Or the better way is
const person2 = {
  name: "Susanto",
  age: 30,
};

// --------
// Exercise
// --------

type User = {
  email: string;
  password: string;
  passwordConfirm: string;
  role: string;
};

function createUser(user: User) {
  if (user.password !== user.passwordConfirm) {
    throw new Error("Passwords don't match");
  }
  console.log("User created: ", user);
}

const userFromForm: User = {
  email: "",
  password: "",
  passwordConfirm: "",
  role: "admin",
};

createUser(userFromForm);
