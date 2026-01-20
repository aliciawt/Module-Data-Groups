// Predict and explain first...
// Calling ${recipe} will not log the ingredients because recipe is an object
// Instead, template literal will log toString() of the object
// So, [object Object] will be logged into the console
// Because JS is telling us that this is an object type object.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);
for (const elements of recipe.ingredients) {
  console.log(elements);
}