import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   padding: var(--padding);
   margin-top: 2rem;
`;

export const Content = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
`;

export const ProductList = styled.div`
   display: flex;
   flex-direction: column;

   div.title-container {
      margin: 1rem 0px;
      h1 {
         color: var(--text-dark);
         font-weight: 500;
         font-size: 1.5rem;
         margin-bottom: 0.5rem;
      }
   }
`;

export const ResumeContainer = styled.div`
   width: 100%;
   max-width: 352px;
   height: 700px;
   padding: 1rem;
   background: #fff;
   margin-left: 1rem;
`;
export const Resume = styled.div`
   border-bottom: 1px solid #dce2e6;

   h1 {
      color: var(--text-dark);
      font-weight: 600;
      font-size: 1.4rem;
      text-transform: uppercase;
   }
   div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 1rem 0px;
      p {
         font-size: 1rem;
         color: var(--text-dark);
         font-weight: 400;
      }
   }
   /* 
   div.subtotal-container {
      display: flex;
      flex-direction: row;
   }

   div.total-container {
   }
   div.shipping-container {
   } */
`;
export const CheckoutSection = styled.div`
   div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0.5rem 0px;
      p {
         font-weight: 600;
         font-size: 1rem;
      }
   }

   button {
      width: 100%;
      border-radius: 4px;
      background: var(--green);
      color: #f5f5fa;
      font-weight: 500;
      text-transform: uppercase;
      border: none;
      outline: none;
      margin-top: 1rem;
      height: 2.4rem;
   }
`;
