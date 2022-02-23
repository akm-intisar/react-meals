import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 0,
          max: 100,
          step: 1,
          default: 0,
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
