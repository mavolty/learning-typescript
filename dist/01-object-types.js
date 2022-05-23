"use strict";
// To make object types, you could do this
const person1 = {
    name: "Jason",
    age: 30,
};
// Or the better way is
const person2 = {
    name: "Susanto",
    age: 30,
};
function createUser(user) {
    if (user.password !== user.passwordConfirm) {
        throw new Error("Passwords don't match");
    }
    console.log("User created: ", user);
}
const userFromForm = {
    email: "",
    password: "",
    passwordConfirm: "",
    role: "admin",
};
createUser(userFromForm);
