import { gql } from "@apollo/client";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { client } from "../../services/apollo-client";
import {
   Container,
   Content,
   ImageContainer,
   LinkContainer,
   InfoContainer,
   ProductDesc,
   ButtonContainer,
} from "./style";

export default function Product({ data }) {
   const { Product: product } = data;

   const { handleAddItemToCart, cart } = useContext(CartContext);
   console.log("cart", cart);

   return (
      <Container>
         <LinkContainer>
            <Link href='/'>Voltar</Link>
         </LinkContainer>
         <Content>
            <ImageContainer>
               <img src={product.image_url} alt={product.name} />
            </ImageContainer>
            <InfoContainer>
               <p className='product-category'>{product.category}</p>
               <h1>{product.name}</h1>
               <h1 className='product-price'>
                  {new Intl.NumberFormat("pt-BR", {
                     style: "currency",
                     currency: "BRL",
                  }).format(product.price_in_cents / 100)}
               </h1>
               <p className='shipping-info'>
                  *Frete de R$ 40,00 para todo o Brasil. Grátis para compras
                  acima de R$ 900,00
               </p>
               <ProductDesc>
                  <h1>Descrição:</h1>
                  <p>{product.description}</p>
               </ProductDesc>
               <button onClick={() => handleAddItemToCart(product)}>
                  <img src='/images/bagWhite.svg' alt='Adicionar ao carrinho' />
                  Adicionar ao carrinho
               </button>
            </InfoContainer>
         </Content>
      </Container>
   );
}

export async function getServerSideProps({ params }) {
   const { id } = params;

   const query = gql`
      query Product($id: ID!) {
         Product(id: $id) {
            id
            name
            description
            image_url
            price_in_cents
            category
         }
      }
   `;
   const { data } = await client.query({
      query: query,
      variables: {
         id: id,
      },
   });

   return {
      props: {
         data,
      },
   };
}
