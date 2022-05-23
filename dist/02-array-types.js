"use strict";
const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};
let favoriteActivities;
// This won't work
// favoriteActivities = 'Sports'
// Or this
// favoriteActivities = ['Sports', 2]
// We can do by using any[] but it's not recommended
// let favoriteActivities: any[];
// favoriteActivities = ["Sports", 2];
// This will work
favoriteActivities = ["Sports", "Cooking"];
// We can also do this because we know the content of the array is string
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // this will be error because hobby is string
    // console.log(hobby.map());
}
function addItemToCart(cart, item) {
    cart.items.push(item);
}
const cart = {
    items: [],
};
addItemToCart(cart, "Ball");
addItemToCart(cart, "Book");
addItemToCart(cart, "Pen");
console.log(cart);
