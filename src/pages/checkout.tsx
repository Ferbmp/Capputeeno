import Link from "next/link";
import React, { useContext } from "react";
import { CardCheckout } from "../components/CardCheckout/component";
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
               <p>Total ({cart.length} Produtos) R$161,00</p>
               {cart?.map((item) => (
                  <>
                     <CardCheckout key={item.id} product={item} />
                  </>
               ))}
            </ProductList>
         </Content>
      </Container>
   );
};

export default Checkout;
