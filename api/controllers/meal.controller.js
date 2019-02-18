import MealService from '../Services/meal.service';

const MealService = {
  fetchAllMeals(req, res){
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
},
  addAMeal(req, res){
    /*
        Expect json of the format
        {
          name: "some food",
          size: "Large",
          "price": 900
        }
    */
   const newMeal = req.body;
   const createdMeal =  MealService.addAMeal(newMeal);
   return res.json({
     status: 'success',
     data: createdMeal
   }).status(201);
  },
  getSingleMeal(req, res){
    const id = req.params.id;
    const foundMeal = MealService.getAmeal(id);
    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);;
  }
};


export default MealController

