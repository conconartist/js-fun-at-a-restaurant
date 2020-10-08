
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

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
