import mealData from '../utils/mealData'
import Meal from '../models/meal.model'

const MealService = {
  fetchAllMeals() {
    const validMeals = mealData.meals.map(meal => {
      const newMeal = new Meal()
      newMeal.id = meal.id
      newMeal.name = meal.name
      newMeal.size = meal.size
      newMeal.price = meal.price
      return newMeal
    })
    return validMeals
  },
  addMeal(meal) {
    const mealDataLength = mealData.meals.length
    const mealId = mealData.meals[mealDataLength - 1].id
    const newId = mealId + 1
    meal.id = newId
    mealData.meals.push(meal)
    return meal
  },
  getAMeal(id) {
    const meal = mealData.meals.find(meal => meal.id == id)
    return meal || {}
  }
}
export default MealService
