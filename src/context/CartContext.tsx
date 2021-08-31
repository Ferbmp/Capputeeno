import React, { createContext, useReducer, useState } from "react";

const initialState: InitialStateType = {
   cart: { loading: true },
   order: null,
};

export const CartContext = createContext([]);

interface Product {
   category: string;
   description: string;
   id: string;
   image_url: string;
   name: string;
   price_in_cents: string;
   qty: number;
}
type Cart = Array<Product>;

export const CartProvider: React.FC = ({ children }) => {
   const [cart, setCart] = useState<Cart>([]);

   function handleAddItemToCart(product: Product) {
      const exist = cart.find((item) => item.id === product.id);

      if (exist) {
         setCart(
            cart.map((item) =>
               item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
            )
         );
      } else {
         setCart([...cart, { ...product, qty: 1 }]);
      }
   }

   function handleRemoveItemFromCart(product: Product) {
      console.log(product);
      const exist = cart.find((item) => item.id === product.id);
      if (exist?.qty === 1) {
         setCart(cart.filter((item) => item.id !== product.id));
      } else {
         setCart(
            cart.map((item) =>
               item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
            )
         );
      }
   }

   function clearCart() {
      setCart([]);
   }
   return (
      <CartContext.Provider
         value={{
            cart,
            handleAddItemToCart,
            handleRemoveItemFromCart,
            clearCart,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
