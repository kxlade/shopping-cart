import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM": {
            const exists = state.find((item) => item.id === action.payload.id);
            if (exists) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];
        }
        case "REMOVE_ITEM":
            return state.filter((product) => product.id !== action.payload);
        case "INCREMENT":
            return state.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product,
            );
        case "DECREMENT": {
            const updated = state.map((product) =>
                product.id === action.payload
                    ? { ...product, quantity: product.quantity - 1 }
                    : product,
            );
            return updated.filter((product) => product.quantity > 0);
        }
        case "CLEAR":
            return [];
        default:
            return state;
    }
};

const getInitialCart = () => {
    try {
        const saved = JSON.parse(localStorage.getItem("cart"));
        return Array.isArray(saved) ? saved : [];
    } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        return [];
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], getInitialCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
    const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
    const increment = (id) => dispatch({ type: "INCREMENT", payload: id });
    const decrement = (id) => dispatch({ type: "DECREMENT", payload: id });
    const clear = () => dispatch({ type: "CLEAR" });

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, increment, decrement, clear, totalItems, totalPrice,}}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};