import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../Store/CartContext.jsx";
import { useContext } from "react";

export default function Header() {
  const ctx=useContext(CartContext);
  const totalCartItems=ctx.items.reduce((acc,item)=>{return acc=acc+item.quantity},0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="restaurant-logo" />
        <h1>FoodHub</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
