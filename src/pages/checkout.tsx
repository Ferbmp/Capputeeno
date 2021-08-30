import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Content, ProductList } from "../styles/checkout";

const Checkout = () => {
   const { cart } = useContext(CartContext);

   console.log("checkout", cart);
   return (
      <Container>
         <Link href='/'>Voltar</Link>
         <Content>
            <ProductList>
               <h1>Seu Carrinho</h1>
               <p>Total (3 produtos) R$161,00</p>
            </ProductList>
         </Content>
      </Container>
   );
};

export default Checkout;
