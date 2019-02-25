import orderService from '../services/order.service'

const orderController = {
  fetchAllOrders(req, res) {
    const allOrders = orderService.fetchAllOrders()
    return res
      .json({
        status: 'success',
        data: allOrders
      })
      .status(200)
  },

  // Add order
  addOrder(req, res) {
    const order = req.body
    const newOrder = orderService.addToOrder(order)
    return res
      .json({
        status: 'success',
        data: newOrder
      })
      .status(201)
  },

  getSingleOrder(req, res) {
    const id = req.params.id
    const foundOrder = orderService.getSingleOrder(id)
    return res
      .json({
        status: 'success',
        data: foundOrder
      })
      .status(201)
  },
  // Update order
  updateOrder(req, res) {
    const id = req.params.id
    const foundOrder = req.body
    const updateOrder = orderService.updateOrder(id, foundOrder)
    return res
      .json({
        status: 'success',
        data: updateOrder
      })
      .status(201)
  },

  // Delete Order
  deleteOrder(req, res) {
    const id = req.params.id
    const deleteOrder = OrdersService.deleteOrder(id)
    return res
      .json({
        status: 'success',
        data: deleteOrder
      })
      .status(200)
  }
}

export default orderController
