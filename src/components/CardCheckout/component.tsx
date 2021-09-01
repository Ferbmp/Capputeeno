import React, { useContext, useState, useEffect } from "react";
import { CartContext, Product } from "../../context/CartContext";
import { formatterForCents } from "../../services/number-formatter";
import { Selector } from "./QuantitySelector/component";
import { Container, ImageContainer, ContentContainer } from "./style";

interface CardCheckoutProps {
   product: Product;
}

export const CardCheckout = ({ product }: CardCheckoutProps) => {
   const [quantity, setQuantity] = useState(1);

   const { handleRemoveItemFromCart, handleUpdateQuantity } =
      useContext(CartContext);

   useEffect(() => {
      handleUpdateQuantity(product, quantity);
   }, [quantity]);

   return (
      <>
         <Container>
            <ImageContainer>
               <img src={product.image_url} alt={product.name} />
            </ImageContainer>
            <ContentContainer>
               <div className='name-container'>
                  <h1>{product.name}</h1>

                  <button onClick={() => handleRemoveItemFromCart(product)}>
                     <img src='/images/trash.svg' alt='' />
                  </button>
               </div>
               <div className='description-container'>
                  <p>{product.description}</p>
               </div>
               <div className='price-container'>
                  <Selector
                     options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                     value={quantity}
                     setValue={setQuantity}
                  />
                  <p>{formatterForCents(product.price_in_cents)}</p>
               </div>
            </ContentContainer>
         </Container>
      </>
   );
};
