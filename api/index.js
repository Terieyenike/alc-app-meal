import express from 'express';
import bodyParser from 'body-parser'


// routes
import mealRoutes from './routes/meal.route';

const app = express();
const PORT = 8001;


app.use(bodyParser.json());

app.get('/', (req, res) => {
  return res.send('the API is working!');
});

// handle mealroutes
app.use('/api/v1/meals', mealRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})