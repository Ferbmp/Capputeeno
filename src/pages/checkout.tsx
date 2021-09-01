import Link from "next/link";
import React, { useContext } from "react";
import { CardCheckout } from "../components/CardCheckout/component";
import { CartContext } from "../context/CartContext";
import { formatterForCents, formatterBRL } from "../services/number-formatter";
import {
   Container,
   Content,
   ProductList,
   ResumeContainer,
   Resume,
   CheckoutSection,
} from "../styles/checkout";

const Checkout = () => {
   const { cart, itemsPrice, shippingPrice, totalPrice } =
      useContext(CartContext);

   return (
      <Container>
         <Link href='/'>Voltar</Link>
         <Content>
            <ProductList>
               <div className='title-container'>
                  <h1>Seu Carrinho</h1>
                  <p>
                     Total ({cart.length} Produtos){" "}
                     <strong>{formatterForCents(itemsPrice)}</strong>
                  </p>
               </div>

               {cart.length > 0 ? (
                  cart.map((item, index) => (
                     <>
                        <CardCheckout key={index} product={item} />
                     </>
                  ))
               ) : (
                  <h1>Seu Carrinho está vazio</h1>
               )}
            </ProductList>
            <ResumeContainer>
               <Resume>
                  <h1>Resumo do Pedido</h1>
                  <div>
                     <p>Subtotal de produtos</p>
                     <p>{formatterForCents(itemsPrice)}</p>
                  </div>
                  <div>
                     <p>Entrega</p>
                     <p>{formatterBRL(shippingPrice)}</p>
                  </div>
               </Resume>
               <CheckoutSection>
                  <div>
                     <p>Total</p>
                     <p>{formatterBRL(totalPrice)}</p>
                  </div>
                  <button>Finalizar Compra</button>
               </CheckoutSection>
            </ResumeContainer>
         </Content>
      </Container>
   );
};

export default Checkout;
