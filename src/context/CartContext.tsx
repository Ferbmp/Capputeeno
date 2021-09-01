import React, { createContext, useEffect, useState } from "react";

export interface Product {
   category: string;
   description: string;
   id: string;
   image_url: string;
   name: string;
   price_in_cents: number;
   qty: number;
}
type Cart = Array<Product>;

interface CartContextType {
   cart: Array<object>;
   itemsPrice: number;
   shippingPrice: number;
   totalPrice: number;
   handleAddItemToCart(product: Product): Cart;
   handleRemoveItemFromCart(product: Product): Cart;
   handleUpdateQuantity(product: Product, quantity: number): Cart;
}

const initialValue = {
   cart: [{}],
   itemsPrice: 0,
   shippingPrice: 0,
   totalPrice: 0,
};
export const CartContext = createContext<CartContextType>(initialValue);

export const CartProvider: React.FC = ({ children }) => {
   const [cart, setCart] = useState<Cart>([]);

   const itemsPrice = cart.reduce(
      (acc, curr) => acc + curr.price_in_cents * curr.qty,
      0
   );
   const shippingPrice = 40;

   const totalPrice =
      itemsPrice != 0 ? itemsPrice / 100 + shippingPrice : shippingPrice;

   useEffect(() => {
      const cartFromLocalStorage = localStorage.getItem("cart");

      const cart = !!cartFromLocalStorage
         ? JSON.parse(cartFromLocalStorage)
         : undefined;
      setCart(cart);
   }, []);

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

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
   function handleUpdateQuantity(product: Product, quantity: number) {
      setCart(
         cart.map((item) =>
            item.id === product.id ? { ...item, qty: quantity } : item
         )
      );
   }

   function handleRemoveItemFromCart(product: Product) {
      setCart(cart.filter((item) => item.id !== product.id));
   }

   return (
      <CartContext.Provider
         value={{
            cart,
            handleAddItemToCart,
            handleRemoveItemFromCart,
            handleUpdateQuantity,
            itemsPrice,
            shippingPrice,
            totalPrice,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
