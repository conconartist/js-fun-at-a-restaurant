
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
    orderItems.push(deliveryOrders[i].item);
 }
 return orderitems.join(', ');
}

function searchOrder(deliveryOrders, ) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item ===
  }
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
