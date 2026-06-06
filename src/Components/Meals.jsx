import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        return;
      }
      const meals = await response.json();
      setLoadedMeals(meals);
      
    }
    getMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem meal={meal} key={meal.id}/>
      ))}
    </ul>
  );
}
