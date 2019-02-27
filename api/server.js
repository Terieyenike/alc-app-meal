import bodyParser from 'body-parser'
import express from 'express'

import mealRoutes from '.routes/meal.route'
import menuRoutes from '.routes/menu.route'
import orderRoutes from '.routes/order.route'

// set the port of our application
// process.env.PORT lets the port be set by Heroku

// set the view engine to ejs
var app = express()
var port = process.env.PORT || 8080

app.set('view engine', 'ejs')

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

// set the home page route
app.get('/', function(req, res) {
  // ejs render automatically looks in the views folder
  res.render('indice')
})

app.use('api/v1/meals', mealRoutes)
app.use('api/v1/menus', menuRoutes)
app.use('api/v1/order', orderRoutes)

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port)
})
