const Cart = ({ setPage }) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Your Cart is empty</h2>
      <button onClick={() => setPage('shop')}>Continue Shopping</button>
    </div>
  );
};
export default Cart;