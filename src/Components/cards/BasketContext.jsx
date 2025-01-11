import { createContext, useContext, useEffect, useState } from "react";
import Images from "../shop/GaleryData";

const BasketContext = createContext();
const initialCartItems = localStorage.getItem("cart-items")
  ? JSON.parse(localStorage.getItem("cart-items"))
  : [];

export const BasketProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        const image = Images.find((image) => image.id === id);
        if (!image) return currItems; 
        return [...currItems, { ...image, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const addToBasket = (image, quantity) => {
    setCartItems((currItems) => {
      const itemExists = currItems.find((item) => item.id === image.id);
      if (itemExists) {
        return currItems.map((item) =>
          item.id === image.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...currItems, { ...image, quantity }];
      }
    });
  };

  return (
    <BasketContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToBasket,
        cartItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  return useContext(BasketContext);
};
