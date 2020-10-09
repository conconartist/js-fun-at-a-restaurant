function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  }
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  if(restaurant.menus.breakfast.includes(menuItem) !== true &&
      restaurant.menus.lunch.includes(menuItem) !== true &&
      restaurant.menus.dinner.includes(menuItem) !== true) {
  if(menuItem.type === "breakfast") {
    restaurant.menus.breakfast.push(menuItem)
  } else if(menuItem.type === "lunch") {
    restaurant.menus.lunch.push(menuItem);
  } else if(menuItem.type === "dinner") {
    restaurant.menus.dinner.push(menuItem)
  }
}
}

function removeMenuItem(restaurant, menuItemName, type) {
  var menuType = restaurant.menus[type]
  for (var i = 0; i < menuType.length; i++) {
    if(menuType[i].name === menuItemName) {
      menuType.splice(i, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${type} menu!`;
    }
  }
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
