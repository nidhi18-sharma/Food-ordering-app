import CartContext from "../Store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import { useContext } from "react";
import { currencyFormatter } from "../util/priceFormatter";
import Button from "./UI/Button.jsx";
import CartBtn from "../Store/CartBtnContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const ctx = useContext(CartContext);
  const ctxCart = useContext(CartBtn);
  const cartTotal = ctx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  function handleClose() {
    ctxCart.hideCart();
  }
  function handleCheckout(){
    ctxCart.showCheckout();
  }

  return (
    <Modal className="cart" open={ctxCart.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            qty={item.quantity}
            price={item.price}
            onDecrease={() => ctx.removeItem(item.id)}
            onIncrease={() => ctx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleClose} textOnly>
          Close
        </Button>
        {ctx.items.length > 0 ? <Button onClick={handleCheckout}>Checkout</Button> : null}
      </p>
    </Modal>
  );
}
