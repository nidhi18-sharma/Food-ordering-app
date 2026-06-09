import CartContext from "../Store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import { useContext } from "react";
import { currencyFormatter } from "../util/priceFormatter"
import Button from "./UI/Button.jsx";

export default function Cart() {
  const ctx = useContext(CartContext);
  const cartTotal = ctx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {ctx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <Button textOnly>Close</Button>
      <Button>Checkout</Button>
    </Modal>
  );
}
