import { Fragment } from "react";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";

function App() {
  return (
    <Fragment>
      <Header></Header>

      <Meal></Meal>
    </Fragment>
  );
}

export default App;
