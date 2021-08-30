import styled from "styled-components";

export const Container = styled.main`
   width: 100%;
   height: 100%;

   margin-top: 2rem;
   align-items: center;
   padding: var(--padding);
`;

export const LinkContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   a {
      margin: 1rem 0px;
      text-decoration: none;
      color: #617480;
   }
`;

export const Content = styled.main`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: row;
`;

export const ImageContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const InfoContainer = styled.section`
   display: flex;
   flex-direction: column;
   margin-left: 2rem;
   align-items: flex-start;
   p {
      &.product-category {
         text-transform: capitalize;
         margin: 0.5rem 0px;
      }

      &.shipping-info {
         font-size: 0.8rem;
         margin: 2rem 0px;
      }
   }

   h1 {
      font-size: 2rem;
      color: var(--text-dark);
      font-weight: 300;
      &.product-price {
         font-weight: 600;
         color: #09090a;
      }
   }

   button {
      margin-top: auto;
      width: 100%;
      max-width: 448px;
      padding: 0.5rem;
      background-color: var(--blue);

      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;

      text-transform: uppercase;
      color: #f5f5fa;
      font-weight: 500;

      img {
         margin-right: 1rem;
      }
   }
`;

export const ProductDesc = styled.div`
   margin: 4rem 0px;
   padding-right: 8rem;
   h1 {
      font-size: 1rem;
      color: var(--text-helps);
      text-transform: uppercase;
      font-weight: 500;
   }
`;

export const ButtonContainer = styled.div``;
