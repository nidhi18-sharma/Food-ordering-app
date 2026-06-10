import { useContext } from "react";
import CartContext from "../Store/CartContext.jsx";
import { currencyFormatter } from "../util/priceFormatter";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import CartBtn from "../Store/CartBtnContext.jsx";
import Modal from "./UI/Modal.jsx";

export default function Checkout() {
  const ctx = useContext(CartContext);
  const ctxCart=useContext(CartBtn);
  const cartTotal = ctx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  function handleClose(){
    ctxCart.hideCheckout();
  }


  return(
  <Modal open={ctxCart.progress === "checkout"}>
    <form>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

      <Input label="Full Name" type="text" id="full-name" />
      <Input label="E-mail" type="email" id="email" />
      <Input label="Address" type="text" id="address" />
      <div className="control-row">
        <Input label="Postal Code" type="text" id="postal-code" />
        <Input label="City" type="text" id="city" />
      </div>

      <p className="modal-actions">
        <Button type="button" textOnly onClick={handleClose}>Close</Button>
        <Button>Submit</Button>
      </p>
    </form>
  </Modal>
  );
}
