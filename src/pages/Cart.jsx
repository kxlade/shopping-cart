import { useCart } from "../context/CartContext";

const Cart = ({ setPage }) => {
  const { cart, increment, decrement, removeItem, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Your Cart is empty 😪</h2>
        <button onClick={() => setPage("shop")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{textAlign: "center" }}>Your Cart</h2>
      <div style={{ marginTop: "1.5rem" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 0",
              borderBottom: "1px solid #e6e6e6",
            }}
          >
            <div style={{ maxWidth: "60%" }}>
              <div style={{ fontWeight: 600}}>{item.name}</div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                £ {item.price.toFixed(2)}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", textAlign:"center" }}>
              <button onClick={() => decrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increment(item.id)}>+</button>
            </div>

            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1.5rem", fontWeight: 700 }}>
        Total: £ {totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;