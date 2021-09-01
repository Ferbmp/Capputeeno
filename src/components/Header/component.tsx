import React, { useContext } from "react";
import { Container, Content } from "./style";
import Link from "next/link";
import { CartContext } from "../../context/CartContext";
export const Header = () => {
   const { cart } = useContext(CartContext);
   return (
      <Container>
         <img src='/images/capputeeno.svg' alt='capputeeno' />
         <Content>
            <input type='text' placeholder='Procurando por algo específico?' />

            <Link href='/checkout' passHref={true}>
               <img src='/images/bagGrey.svg' alt='' />
            </Link>
            <div className='cart-count'>
               <p>{cart.length}</p>
            </div>
         </Content>
      </Container>
   );
};
