import { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import cartIcon from "../../assets/shopping_cart.svg";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <img src={cartIcon} alt="Icon" />
      <a className={classes.badge}>
        <span className={classes.text}>{numberOfCartItems}</span>
      </a>
    </button>
  );
};

export default HeaderCartButton;
