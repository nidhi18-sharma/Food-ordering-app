import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="restaurant-logo" />
        <h1>FoodHub</h1>
      </div>
      <nav>
        <Button textOnly>Cart</Button>
      </nav>
    </header>
  );
}
