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

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
