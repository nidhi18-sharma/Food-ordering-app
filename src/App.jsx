import Header from "./Components/Header.jsx";
import Meals from "./Components/Meals.jsx";
import { CartContextProvider } from "./Store/CartContext.jsx";
import { CartBtnProvider } from "./Store/CartBtnContext.jsx";
import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/Checkout.jsx";

function App() {
  return (
    <CartBtnProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart/>
      <Checkout/>
    </CartContextProvider>
    </CartBtnProvider>
    
  );
}

export default App;
