function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  }
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  var lunchMenu = restaurant.menus.lunch;
  lunchMenu.push(menuItem);
}

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
