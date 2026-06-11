import { useEffect } from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../Hooks/useHttp.js";
import Error from "./Error.jsx";

export default function Meals() {
  const { data: loadedMeals, sendReq, isLoading,error } = useHttp([]);

  useEffect(() => {
    sendReq("http://localhost:3000/meals");
  }, [sendReq]);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if(error){
    return <Error title="failed to fetch meals" message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}