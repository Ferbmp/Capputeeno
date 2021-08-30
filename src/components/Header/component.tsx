import React from "react";
import { Container, Content } from "./style";
import Link from "next/link";
export const Header = () => {
   return (
      <Container>
         <img src='/images/capputeeno.svg' alt='capputeeno' />
         <Content>
            <input type='text' placeholder='Procurando por algo específico?' />

            <Link href='/checkout' passHref={true}>
               <img src='/images/bagGrey.svg' alt='' />
            </Link>
         </Content>
      </Container>
   );
};
