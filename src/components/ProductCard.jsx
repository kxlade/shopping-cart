import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const rating = Math.round(product.rating);
    const rating2 = 5 - Math.round(product.rating);

    const [added, setAdded] = useState(false);
    const { addItem } = useCart();

    const handleMouseMove = (event) => {
        const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!canHover) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 10;
        const rotateX = (0.5 - y) * 10;

        event.currentTarget.style.setProperty("--rx", `${rotateX}deg`);
        event.currentTarget.style.setProperty("--ry", `${rotateY}deg`);
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.setProperty("--rx", "0deg");
        event.currentTarget.style.setProperty("--ry", "0deg");
    };

    return (
        <div className="card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {product.badge && <span className="card_badge">{product.badge}</span>}
            <div className="card_visual">
                <span className="card_emoji">{product.emoji}</span>
            </div>

            <div className="card_info">
                <p  className="card_category">{product.category}</p>
                <h3 className="card_name">{product.name}</h3>
                <p  className="card_description">{product.description}</p>

                <div className="card_rating-row">
                    <span className="card_stars">
                        {"\u2B50".repeat(rating)}
                        {"\u2606".repeat(rating2)}
                    </span>
                    <span className="card_reviews">{product.reviews}</span>
                </div>

                <div className="card_footer">
                    <span className="card_price">£ {product.price.toFixed(2)} </span>
                    <button
                        className={`card_add-btn ${added ? "card_add-btn--added" : ""}`}
                        onClick={() => {
                            addItem(product);
                            setAdded(true);
                        }}
                    >
                        {added ? "Added" : "Add to Cart 🛒"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;