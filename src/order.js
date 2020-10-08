
function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
  deliveryOrders.push(order);
  } else {
    return deliveryOrders;
  }
}

module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
