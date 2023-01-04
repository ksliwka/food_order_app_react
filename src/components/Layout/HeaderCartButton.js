import classes from './HeaderCartButton.module.css'
import cartIcon from "../../assets/shopping_cart.svg";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      
      <img src={cartIcon} />
      <a className={classes.badge}><span className={classes.text}>3</span></a>
    </button>

  );
};

export default HeaderCartButton;
