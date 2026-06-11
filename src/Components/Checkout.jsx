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
function handleSubmit(e){
e.preventDefault();
const fd= new FormData(e.target);
const customerData=Object.fromEntries(fd.entries());
fetch('http://localhost:3000/orders',{
    method:'POST',
    headers:{
        'Content-Type':'application/json' 
    },
    body:JSON.stringify({
        order:{
            items:ctx.items,
            customer:customerData
        }
    })
})
}

  return(
  <Modal open={ctxCart.progress === "checkout"} onClose={handleClose}>
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

      <Input label="Full Name" type="text" id="name" />
      <Input label="E-mail" type="email" id="email" />
      <Input label="Street" type="text" id="street" />
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
