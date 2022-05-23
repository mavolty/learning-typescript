let userInput: unknown;

userInput = 5;
userInput = "5";

let userName: string;
// We can't do this because userName type is string but we pass userInput which is unknown and unknown type is not guaranteed to be a string
// userName = userInput;
