import CartContext from "../Store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import { useContext } from "react";
import { currencyFormatter } from "../util/priceFormatter"
import Button from "./UI/Button.jsx";
import CartBtn from "../Store/CartBtnContext.jsx";

export default function Cart() {
  const ctx = useContext(CartContext);
  const ctxCart =useContext(CartBtn);
  const cartTotal = ctx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
function handleClose(){
    ctxCart.hideCart();
}

  return (
    <Modal className="cart" open={ctxCart.progress==='cart'}>
      <h2>Your Cart</h2>
      <ul>
        {ctx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <Button onClick={handleClose} textOnly>Close</Button>
      <Button>Checkout</Button>
    </Modal>
  );
}
