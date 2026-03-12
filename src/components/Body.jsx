import './Body.css';


const Body = ({ page, setPage }) => {
  const handleBrowseProducts = () => {
    if (setPage) setPage('shop');
  };

  return (
    <section className="body-cont">
      <h2 className="body-head">Shopping Cart</h2>
      <p className="body-para">
        Discover fresh ingredients, kitchen tools, and pantry essentials picked for quick
        weeknight meals. Browse products, add to cart, and checkout whenever you are ready.
      </p>
      <div className="body-actions">
        <button type="button" onClick={handleBrowseProducts}>
          Browse Products
        </button>
        <span className="body-hint">
          Current page: {page || 'home'}
        </span>
      </div>
    </section>
  );
};

export default Body;