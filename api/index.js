import express from 'express';
feature/create-meal-routes
import bodyParser from 'body-parser';


// routers 
import mealRoutes from './routes/meal.route';

import bodyParser from 'body-parser'
master

const app = express();
const PORT = 7001;

feature/create-meal-routes
app.use(bodyParser.json());  

app.use(bodyParser.json());
master

app.get('/', (req, res) => {
  return res.send('The API is working, let\'s crack some code');
})


app.use('api/v1/meals', mealRoutes);

app.listen(PORT, () => {
  console.log(`Server is currently running on PORT ${PORT}`)
})