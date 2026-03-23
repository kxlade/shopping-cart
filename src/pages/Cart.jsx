import { useCart } from "../context/CartContext";

const Cart = ({ setPage }) => {
  const { cart, increment, decrement, removeItem, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart_empty">
        <h2>Your Cart is empty 😪</h2>
        <button onClick={() => setPage("shop")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart_title">Your Cart</h2>
      <div className="cart_list">
        {cart.map((item) => (
          <div
            key={item.id}
            className="cart_item"
          >
            <div className="cart_item-info">
              <div className="cart_item-name">{item.name}</div>
              <div className="cart_item-price">
                £ {item.price.toFixed(2)}
              </div>
            </div>

            <div className="cart_item-actions">
              <button onClick={() => decrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increment(item.id)}>+</button>
            </div>

            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart_total">
        Total: £ {totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
