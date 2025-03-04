import { useState, useEffect, useDebugValue } from "react";

//custom hook
// its just a function that calls other hooks
export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const pizzaRes = await fetch("/api/pizza-of-the-day");
      const pizzaJson = await pizzaRes.json();
      setPizzaOfTheDay(pizzaJson);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
