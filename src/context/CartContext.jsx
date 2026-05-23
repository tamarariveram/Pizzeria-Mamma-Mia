import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);

    if (existingPizza) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  const decreaseCount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item,
    );
    setCart(updatedCart.filter((item) => item.count > 0));
  };

  const total = cart.reduce(
    (total, item) => total + item.price * item.count,
    0,
  );

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, increaseCount, decreaseCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
