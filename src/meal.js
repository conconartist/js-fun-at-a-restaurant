function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
  name: name,
  price: price,
  type: type,
}
  return menuItem;
};

function addIngredients(newIngredient, ingredients) {
  if(ingredients.includes(newIngredient) !== true) {
  ingredients.push(newIngredient);
  } else {
  return ingredients;
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
