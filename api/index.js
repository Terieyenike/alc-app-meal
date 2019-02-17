import express from 'express';
import bodyParser from 'body-parser';


// routers 
import mealRoutes from './routes/meal.route';

const app = express();
const PORT = 7001;

app.use(bodyParser.json());  

app.get('/', (req, res) => {
  return res.send('The API is working, let\'s crack some code');
})


app.use('api/v1/meals', mealRoutes);

app.listen(PORT, () => {
  console.log(`Server is currently running on PORT ${PORT}`)
})