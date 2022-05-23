"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// If we have option value for example in this case we have a admin, read only, and author role for person we can just put the value like this:
const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: "ADMIN",
};
// And check value of role like this:
if (person.role === "ADMIN") {
    console.log("is admin");
}
// But it's not recommended to use this way because it's not clear what is the type of the role
// Second way we can create constanst for each role
const ADMIN = "ADMIN";
const READ_ONLY = "READ_ONLY";
const AUTHOR = "AUTHOR";
const newPerson = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: ADMIN,
};
// For better way we can use a enum type like this:
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const alsoNewPerson = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// --------
// Exercise
// --------
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FACEBOOK"] = "facebook";
    SocialMedia["TWITTER"] = "twitter";
    SocialMedia["INSTAGRAM"] = "instagram";
})(SocialMedia || (SocialMedia = {}));
function sharePost(media) {
    console.log("Sharing on " + media);
}
sharePost(SocialMedia.FACEBOOK);
