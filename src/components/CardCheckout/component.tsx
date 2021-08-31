import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, ImageContainer, ContentContainer } from "./style";

export const CardCheckout = ({ product }) => {
   const { handleRemoveItemFromCart } = useContext(CartContext);
   return (
      <>
         <Container>
            <ImageContainer>
               <img src={product.image_url} alt={product.name} />
            </ImageContainer>
            <ContentContainer>
               <h1>{product.name}</h1>
               <p>{product.description}</p>
               <p>{product.price_in_cents}</p>
               <button onClick={() => handleRemoveItemFromCart(product)}>
                  <img src='/images/trash.svg' alt='' />
               </button>
            </ContentContainer>
         </Container>
      </>
   );
};
