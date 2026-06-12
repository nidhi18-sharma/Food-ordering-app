import { currencyFormatter } from "../util/priceFormatter";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "../Store/CartContext.jsx";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const cartItem = cartCtx.items.find((item) => item.id === meal.id);
  function handleAddItem() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          {cartItem ? (
            <div className="meal-item-stepper">
              <button onClick={() => cartCtx.removeItem(cartItem.id)}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => cartCtx.addItem(cartItem)}>+</button>
            </div>
          ) : (
            <Button onClick={handleAddItem}>Add to Cart</Button>
          )}
        </div>
      </article>
    </li>
  );
}
