
// import './App.css';

import { useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';



function Order() {

  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () =>{
    setCartIsShown(true)

  };
  const hideCartHandler = () =>{
    setCartIsShown(false)
  }
  const hello = () =>{
    setCartIsShown(console.log("order"))
  }
  return (
    
    <CartProvider>
      
      { cartIsShown && <Cart onClose={hideCartHandler} onClick={hello}/>}
     <Header onShowCart={showCartHandler} />
     <main>
 <Meals />
 
     </main>
    </CartProvider>
  );
}

export default Order;
