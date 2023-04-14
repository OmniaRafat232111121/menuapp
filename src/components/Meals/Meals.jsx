import React from 'react'
import MealsSummary from '../MealsSummary/MealsSummary'
import './Meals.css';
import AvailableMeals from '../AvailableMeals/AvailableMeals';
const Meals = () => {
  return (
    <div>
 <MealsSummary/>
 <AvailableMeals/>
      
    </div>
  )
}

export default Meals
