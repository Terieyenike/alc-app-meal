import orderData from '../utils/orderData'
import Order from '../models/order.model'

const OrderService = {
  fetchAllOrders() {
    const validOrders = orderData.orders.map(order => {
      const newOrder = new Order()
      newOrder.id = order.id
      newOrder.size = order.size
      newOrder.name = order.name
      newOrder.price = order.price
      newOrder.delivery = order.delivery
      newOrder.customer = order.customer
      return newOrder
    })
    return validOrders
  },
  getSingleOrder(id) {
    const order = orderData.orders.find(order => order.id == id)
    return order || {}
  }

  // add order for the meal
  /*addOrder(order) {
    const orderLength = orderData.orders.length
    const lastId = orderData.orders[orderLength - 1].id
    const newId = lastId + 1
    order.id = newId
    orderData.orders.push(order)
    return order
  },

  // update all orders
  updateOrder(id) {
    const orderId = orderData.orders.find(order => order.id == id)
    updateOrder.id = orderId.id
    orderData.orders.splice(orderId.id - 1, 1, updateOrder)
    return updateOrder
  },

  // delete menu order
  deleteOrder(id) {
    const order = orderData.orders.find(order => order.id == id)
    orderData.orders.splice(order.id - 1, 1)
    return {}
  }*/
}

export default OrderService
