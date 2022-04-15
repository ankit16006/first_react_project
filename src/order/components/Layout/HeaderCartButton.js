import React from "react";

import { useContext,useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const listData = useSelector((state) => 
    state.todoReducers.list)
//  console.log(listData)
    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx)
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  
 
  const btnClasses  = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`
  // console.log(numberOfCartItems)
useEffect(() => {

    if(items.length === 0){
        return;
    }
setBtnIsHighlighted(true);

const timer = setTimeout(() => {
    setBtnIsHighlighted(false)
}, 300);
return () => {
    clearTimeout(timer)
}

}, [items]);
  return ( 
  <>
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
     
    </button>
    <div className="show" >
      {listData.map((elem) => {
        return (
          <div className="nameshow" key={elem.id}>
          <h3> {elem.item.fullname} </h3>
          
          </div>
        )
        
            
          // console.log(elem.item.fullname)
      })}
    </div>
    </>
  );
};

export default HeaderCartButton;
