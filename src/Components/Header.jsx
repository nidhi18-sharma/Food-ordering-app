import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../Store/CartContext.jsx";
import { useContext } from "react";
import CartBtn from "../Store/CartBtnContext.jsx";

export default function Header() {
  const ctx = useContext(CartContext);
  const ctxCart = useContext(CartBtn);
  const totalCartItems = ctx.items.reduce((acc, item) => {
    return (acc = acc + item.quantity);
  }, 0);

  function handleCart() {
    ctxCart.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="restaurant-logo" />
        <h1>FoodHub</h1>
      </div>
      <nav>
        <Button onClick={handleCart} textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
