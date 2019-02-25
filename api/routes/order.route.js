import express from 'express'
import orderController from '../controllers/order.controller'

const router = express.Router()

router.get('/', orderController.fetchAllOrders)

router.get('/:id', orderController.getSingleOrder)

export default router
