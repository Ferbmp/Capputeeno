import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   max-width: 256px;
   height: 378px;
   max-height: 378px;

   margin: 0.5rem 0.5rem;

   img {
      object-fit: cover;

      border-radius: 8px 8px 0px 0px;
      width: 100%;
      height: 100%;
   }
`;

export const Content = styled.div`
   background-color: white;
   backdrop-filter: blur(20px);
   border-radius: 8px 8px 4px 4px;
   height: 100%;
   display: flex;
   flex-direction: column;
`;

export const InfoContainer = styled.div`
   padding: 0px 16px;
   display: flex;
   flex-direction: column;
`;

export const ProductName = styled.div`
   border-bottom: 1px solid var(--grey-light);
   padding: 8px 0px;
   font-weight: 300;
   h1 {
      font-weight: 300;
   }
`;

export const ProductPrice = styled.h1`
   width: 100%;
   padding: 8px 0px;
`;
