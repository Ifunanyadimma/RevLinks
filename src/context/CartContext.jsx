import { createContext,  useState } from "react";

// Create a Context

export const CartContext = createContext();

// Create a Custom Hook
// export const useCart = () => {
//   return useContext(CartContext);
// };

// Create a Provider Component
const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;