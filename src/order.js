
function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
  deliveryOrders.push(order);
  } else {
    return deliveryOrders;
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(orderNumber === deliveryOrders[i].orderNumber){
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var items =[];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
 }
 return items.join(', ');
}

function searchOrder(deliveryOrders, entree) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === entree) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
