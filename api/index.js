import express from 'express'
import bodyParser from 'body-parser'

// import meal routes from route
import mealRoutes from './routes/meal.route'
import menuRoutes from './routes/menu.route'
import orderRoutes from './routes/order.route'

const app = express()
const PORT = process.env.PORT || 9001

app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.send('the API is working perfectly, just do it!')
})

app.use('/api/v1/meals', mealRoutes)
app.use('/api/v1/menus', menuRoutes)
app.use('/api/v1/order', orderRoutes)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT ${PORT}, okay`)
})

export default app
