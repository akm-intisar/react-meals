import { Fragment } from "react";
import classes from "./Header.module.css";
import meal from "./../../Asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div>
        <img
          src={meal}
          alt="meal-react"
          className={classes["main-image"]}
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
