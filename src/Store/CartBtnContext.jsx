import { createContext, useState } from "react";

const CartBtn = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function CartBtnProvider({ children }) {
  const [progState, setProgState] = useState("");

  function showCart() {
    setProgState("cart");
  }
  function hideCart() {
    setProgState("");
  }
  function showCheckout() {
    setProgState("checkout");
  }
  function hideCheckout() {
    setProgState("");
  }

  const cartBtnValues = {
    progress: progState,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return <CartBtn value={cartBtnValues}>{children}</CartBtn>;
}

export default CartBtn;
