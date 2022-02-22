import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meal = () => {
  return (
    <Fragment>
      <MealSummary></MealSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meal;
