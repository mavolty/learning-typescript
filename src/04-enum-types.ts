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
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const alsoNewPerson = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// --------
// Exercise
// --------

enum SocialMedia {
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
}

function sharePost(media: SocialMedia) {
  console.log("Sharing on " + media);
}

sharePost(SocialMedia.FACEBOOK);

export {};
